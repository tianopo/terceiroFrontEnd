import { yupEnglishLocale } from "src/idiomas/idiomasYup/yupEnglish";
import { yupPortugueseLocale } from "src/idiomas/idiomasYup/yupPortuguese";
import * as Yup from "yup";

export const setLocaleYup = (language: string) => {
  switch (language) {
    case "us":
      Yup.setLocale(yupEnglishLocale);
      break;
    default:
      Yup.setLocale(yupPortugueseLocale);
  }
};

export default Yup;
