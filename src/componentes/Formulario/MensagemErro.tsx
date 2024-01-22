import { TX } from "../Tags/TextoX";

interface IMensagemDeErro {
  errors?: string;
}

export const MensagemDeErro = ({ errors }: IMensagemDeErro) => {

  if (!errors) {
    return <></>;
  }

  return (
    <TX tipo="span" className={`text-12 font-normal label_required-claro`}>
      {errors}
    </TX>
  );
};
