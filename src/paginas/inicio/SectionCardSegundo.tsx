import { CX, Section } from "src/componentes";
import { Flex } from "src/componentes/Flex/Flex";
import { FlexCol } from "src/componentes/Flex/FlexCol";
import { TX } from "src/componentes/Tags/TextoX";

interface ISectionCardSegundo {
  id?: string;
  card?: ICard[];
}

interface ICard {
  icone?: JSX.Element;
  descricao?: string;
}

export const SectionCardSegundo = ({ id, card }: ISectionCardSegundo) => {

  return (
    <Section className="p-4">
      <Flex className="flex-wrap justify-center gap-6">
        {card?.map(({ descricao, icone }: ICard, key) => (
          <FlexCol
            key={key}
            className={`h-fit w-72 items-center gap-1.5 rounded-10 border-3 section_card-claro p-3 shadow-xl`}
          >
            <CX tipo="div" className={`rounded-full border-1 p-4 section_icone-claro`} id={id}>
              {icone}
            </CX>
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
