import { TX } from "../Tags/TextoX";

interface IMensagemDeErro {
  errors?: string;
}

export const MensagemDeErro = ({ errors }: IMensagemDeErro) => {
  if (!errors) {
    return <></>;
  }

  return (
    <TX tipo="span" className={`label_required-claro text-12 font-normal`}>
      {errors}
    </TX>
  );
};
