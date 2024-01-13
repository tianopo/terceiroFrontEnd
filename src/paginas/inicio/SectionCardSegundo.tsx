import { CX, Section } from "src/componentes";
import { Flex } from "src/componentes/Flex/Flex";
import { FlexCol } from "src/componentes/Flex/FlexCol";
import { TX } from "src/componentes/Tags/TextoX";
import { useTema } from "src/hooks";

interface ISectionCardSegundo {
  id?: string;
  card?: ICard[];
}

interface ICard {
  icone?: JSX.Element;
  descricao?: string;
}

export const SectionCardSegundo = ({ id, card }: ISectionCardSegundo) => {
  const { tema } = useTema();

  return (
    <Section className="p-4">
      <Flex className="flex-wrap justify-center gap-6" id={id}>
        {card?.map(({ descricao, icone }: ICard, key) => (
          <FlexCol
            key={key}
            className={`h-fit w-72 items-center gap-1.5 rounded-10 hover:border-3 section_card-${tema} p-3 shadow-xl`}
          >
            <CX tipo="div" className="p-4 border-1 border-black rounded-full text-white">{icone}</CX>
            {descricao && (
              <TX tipo="p" className="text-center text-16 text-white">
                {descricao}
              </TX>
            )}
          </FlexCol>
        ))}
      </Flex>
    </Section>
  );
};
