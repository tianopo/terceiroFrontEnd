import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { useTema } from "src/hooks";
import { CX } from "../Tags/ConteudoX";
import { Footer } from "./Footer";
import { Header } from "./Header";
// fechar sidebar
export const Layout = () => {
  const { tema } = useTema();
  const { t: tradutor } = useTranslation();
  const t = (t: string) => tradutor(`layout.${t}`);

  const nav = [
    { texto: t("inicio"), rota: "#" },
    { texto: t("cards"), rota: "#card1" },
    { texto: "banner", rota: "#banner" },
    { texto: "icones", rota: "#icones" },
    { texto: "Imagens", rota: "#imagens" },
    { texto: t("contato"), rota: "#contato" },
  ];

  const icones = [
    { imagem: "/sociais/whatsapp.png", rota: "https://wa.me/5512982435638" },
    { imagem: "/sociais/github.png", rota: "https://github.com/tianopo" },
    { imagem: "/sociais/linkedin.png", rota: "https://www.linkedin.com/in/matheustianopo/" },
  ];

  return (
    <CX tipo="div" className={`home-${tema}`}>
      <Header imagem="/projeto/logo.svg" navbar={nav} titulo="Fábrica de Software" temaCor idioma />
      <Outlet />
      <Footer titulo="Matheus Henrique de Abreu" description={t("description")} icones={icones} />
    </CX>
  );
};
