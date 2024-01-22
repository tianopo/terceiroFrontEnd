import { Article } from "@phosphor-icons/react";
import { useState } from "react";
import { FlexRow } from "../Flex/FlexRow";
import { CX } from "../Tags/ConteudoX";
import { TX } from "../Tags/TextoX";

interface INavbar {
  texto: string;
  rota: string;
}

interface IHeader {
  imagem?: string;
  titulo?: string;
  navbar?: INavbar[];
}

export const Header = ({ imagem, titulo, navbar, }: IHeader) => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <CX
        tipo="header"
        className={`
      sticky
      top-0
      z-10
      flex
      h-20
      w-full
      flex-row
      justify-between
      rounded-b-6
      border-b-1
      p-3
      header-claro
      `}
      >
        <FlexRow className="gap-1">
          {imagem && (
            <img
              src={imagem}
              alt={titulo}
              className={`
              header_imagem-claro
              h-12
              w-10
              rounded-20
              border-1
              p-0.5
          `}
            />
          )}
          {titulo && (
            <TX tipo="h1" className="text-20 font-bold">
              {titulo}
            </TX>
          )}
        </FlexRow>
        {navbar && (
          <>
            <FlexRow className={`hidden gap-1 md:flex`}>
              {navbar.map(({ texto, rota }: INavbar, key: number) => (
                <a key={key} href={rota}>
                  <TX
                    tipo="p"
                    className={`
                    p-2
                    text-16
                    font-bold
                    text-white
                    hover:underline
                    `}
                  >
                    {texto.toUpperCase()}
                  </TX>
                </a>
              ))}
            </FlexRow>

            <FlexRow className={`flex items-center justify-center px-4 md:hidden`}>
              <CX tipo="div" className="relative inline-block w-auto pt-1 duration-300">
                <button
                  onClick={() => setMenuAberto(!menuAberto)}
                  onBlur={() =>
                    setTimeout(() => {
                      setMenuAberto(false);
                    }, 100)
                  }
                  className={`navbar_mobile_botao-claro rounded-6 border-1`}
                >
                  <Article
                    className={`
                  h-7
                  w-7
                  font-bold
                  navbar_mobile_article-claro
                  `}
                  />
                </button>
                {menuAberto && (
                  <div
                    className={`
                    absolute
                    right-0
                    w-auto
                    rounded-6
                    border-1
                    duration-300
                    menu_mobile-claro
                    `}
                  >
                    {navbar.map(({ texto, rota }, key: number) => (
                      <a key={key} href={rota}>
                        <TX
                          tipo="p"
                          className={`
                        p-2
                        text-16
                        font-bold
                        text-white
                        hover:underline
                        `}
                        >
                          {texto.toUpperCase()}
                        </TX>
                      </a>
                    ))}
                  </div>
                )}
              </CX>
            </FlexRow>
          </>
        )}
      </CX>
    </>
  );
};
