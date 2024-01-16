import { Section } from "src/componentes";
import { useTema } from "src/hooks";

interface ISectionCarousel {
  id?: string;
  card?: ICard[];
}

interface ICard {
  icone?: JSX.Element;
  descricao?: string;
}

export const SectionCarousel = ({ id, card }: ISectionCarousel) => {
  const { tema } = useTema();

  return (
    <Section className="p-4">

    </Section>
  );
};
