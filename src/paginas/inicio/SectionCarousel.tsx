import { useEffect, useState } from "react";
import { Section } from "src/componentes";
import { useTema } from "src/hooks";

interface ISectionCarousel {
  id?: string;
  imagens: string[];
}

export const SectionCarousel = ({ id, imagens }: ISectionCarousel) => {
  const { tema } = useTema();
  const [indiceImagem, setIndiceImagem] = useState(0);

  const avancarImagem = () => {
    setIndiceImagem((a) => (a + 1) % imagens.length);
  };

  const retrocederImagem = () => {
    setIndiceImagem((a) => (a - 1 + imagens.length) % imagens.length);
  };

  const selecionarImagem = (index: number) => {
    setIndiceImagem(index);
  };

  useEffect(() => {
    const intervalId = setInterval(avancarImagem, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [indiceImagem]);

  return (
    <Section className="p-8 relative overflow-hidden">
      <div className="relative w-full h-80 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out transform"
          style={{ width: `${imagens.length * 100}%`, transform: `translateX(-${(indiceImagem / imagens.length) * 100}%)` }}
        >
          {imagens.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt={`Imagem ${index + 1}`}
              className="w-full h-80 object-cover rounded-md"
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex">
        {imagens.map((_, index) => (
          <span
            key={index}
            onClick={() => selecionarImagem(index)}
            className={`h-4 w-4 bg-white rounded-full inline-block mx-1 cursor-pointer ${index === indiceImagem ? "opacity-100" : "opacity-50"
              }`}
          />
        ))}
      </div>
      <button
        onClick={retrocederImagem}
        className="absolute top-1/2 left-12 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer"
      >
        {"<"}
      </button>
      <button
        onClick={avancarImagem}
        className="absolute top-1/2 right-12 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer"
      >
        {">"}
      </button>
    </Section>
  );
};
