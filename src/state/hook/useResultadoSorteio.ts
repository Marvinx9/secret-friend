import { useRecoilValue } from "recoil";
import { amigoSecreto } from "../atom";

export const useResultadoSorteio = () => {
  return useRecoilValue(amigoSecreto);
};
