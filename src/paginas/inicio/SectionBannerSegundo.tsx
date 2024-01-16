import { ReactNode } from "react";
import { Section } from "src/componentes";
import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { useTema } from "src/hooks";

export const SectionBannerSegundo = ({
  id,
  children,
  imagem,
  titulo,
  descricao,
  botao,
  rota,
}: ISectionBanner) => {
  const { tema } = useTema();
  const handleButtonClick = () => {
    window.location.href = rota || "";
  };

  return (
    <Section>
      <div
        className="relative h-96 bg-fixed"
        style={{ backgroundImage: `url('${imagem}')` }}
        id={id}
      >
        <div className="absolute inset-0 flex min-w-0 flex-col items-center justify-center gap-3 p-12 text-center text-white">
          <img src="/projeto/logo.svg" alt={titulo} className="h-20 w-24" />
          {titulo && <h1 className="mb-4 text-justify text-36 font-bold">{titulo}</h1>}
          {descricao && (
            <p className="mb-6 max-w-full overflow-hidden text-ellipsis whitespace-pre-line text-justify text-18 md:whitespace-break-spaces">
              {descricao}
            </p>
          )}
          {botao && rota && (
            <BotaoOnClick
              className={`flex flex-row items-center gap-3 text-white section_botao-${tema}`}
              onClick={handleButtonClick}
            >
              <img src="/sociais/whatsapp.png" alt="icone de whatsapp" className="h-6 w-6" />
              {botao}
            </BotaoOnClick>
          )}
        </div>
        {children}
      </div>
    </Section>
  );
};

interface ISectionBanner {
  id?: string;
  children?: ReactNode;
  imagem: string;
  titulo?: string;
  descricao?: string;
  botao?: string;
  rota?: string;
}
