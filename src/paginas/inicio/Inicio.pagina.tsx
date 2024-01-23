import { CarProfile, Moon, Table } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { FlexCol, SectionContato } from "src/componentes";
import { SectionBannerSegundo } from "./SectionBannerSegundo";
import { SectionCardSegundo } from "./SectionCardSegundo";
import { SectionCarousel } from "./SectionCarousel";

export const Inicio = () => {
  const { t: tradutor } = useTranslation();
  const t = (t: string) => tradutor(`inicio.${t}`);

  const card = [
    {
      descricao: t("cardDescricao"),
      icone: <Moon size={60} />,
    },
    {
      descricao: t("cardDescricao"),
      icone: <CarProfile size={60} />,
    },
    {
      descricao: t("cardDescricao"),
      icone: <Table size={60} />,
    },
  ];

  return (
    <FlexCol className="gap-32">
      <SectionCarousel
        imagens={[
          "/projeto/banner.webp",
          "/projeto/banner2.png",
          "/projeto/banner3.jpeg",
        ]}
      />
      <SectionCardSegundo card={card} id="informacoes" />
      <SectionBannerSegundo
        imagem="/projeto/banner.webp"
        titulo="Fábrica de Software"
        descricao={t("bannerDescricao")}
        rota="https://wa.me/5512982435638"
        botao={t("bannerBotao")}
        id="agendamento"
      />
      <SectionContato id="contato" titulo={t("contatoTitulo")} />
    </FlexCol>
  );
};
