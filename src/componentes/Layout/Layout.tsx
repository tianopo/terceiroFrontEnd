import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { CX } from "../Tags/ConteudoX";
import { Footer } from "./Footer";
import { Header } from "./Header";
// fechar sidebar
export const Layout = () => {
  const { t: tradutor } = useTranslation();
  const t = (t: string) => tradutor(`layout.${t}`);

  const nav = [
    { texto: t("inicio"), rota: "#" },
    { texto: "informações", rota: "#informacoes" },
    { texto: "agendamento", rota: "#agendamento" },
    { texto: t("contato"), rota: "#contato" },
  ];

  const icones = [
    { imagem: "/sociais/whatsapp.png", rota: "https://wa.me/5512982435638" },
    { imagem: "/sociais/github.png", rota: "https://github.com/tianopo" },
    { imagem: "/sociais/linkedin.png", rota: "https://www.linkedin.com/in/matheustianopo/" },
  ];

  return (
    <CX tipo="div" className={`home-claro`}>
      <Header imagem="/projeto/logo.svg" navbar={nav} titulo="Fábrica de Software" />
      <Outlet />
      <Footer titulo="Matheus Henrique de Abreu" description={t("description")} icones={icones} />
    </CX>
  );
};
