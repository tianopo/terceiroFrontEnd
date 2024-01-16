import { CarProfile, Moon, Table } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { FlexCol, SectionBanner, SectionCard, SectionContato } from "src/componentes";
import { SectionBannerSegundo } from "./SectionBannerSegundo";
import { SectionCardSegundo } from "./SectionCardSegundo";

export const Inicio = () => {
  const { t: tradutor } = useTranslation();
  const t = (t: string) => tradutor(`inicio.${t}`);

  const card = [
    {
      descricao:
        t("cardDescricao"),
      icone: <Moon size={60} />,
    },
    {
      descricao:
        t("cardDescricao"),
      icone: <CarProfile size={60} />,
    },
    {
      descricao:
        t("cardDescricao"),
      icone: <Table size={60} />,
    },
  ];

  return (
    <FlexCol className="gap-32">
      <SectionBanner
        imagem="/projeto/banner.webp"
        titulo="Fábrica de Software"
        descricao={t("bannerDescricao")}
        rota="https://wa.me/5512982435638"
      />
      <SectionCard
        titulo="Fábrica de Software"
        descricao={t("sectionCardDescricao")}
        rota="https://wa.me/5512982435638"
        card={card}
        id="card1"
      />
      <SectionBannerSegundo
        imagem="/projeto/banner.webp"
        titulo="Fábrica de Software"
        descricao={t("bannerDescricao")}
        rota="https://wa.me/5512982435638"
        botao="Agende seu Orçamento"
        id="banner"
      />
      <SectionCardSegundo card={card} id="icones" />
      <SectionContato id="contato" titulo={t("contatoTitulo")} />
    </FlexCol>
  );
};
