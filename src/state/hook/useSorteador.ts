import { useListaDeParticipantes } from "./useListaDeParticipantes";
import { useSetRecoilState } from "recoil";
import { amigoSecreto } from "../atom";
import { realizarSorteio } from "../helpers/realizarSorteio";

export const useSorteador = () => {
  const participantes = useListaDeParticipantes();

  const setResultado = useSetRecoilState(amigoSecreto);

  return () => {
    const resultado = realizarSorteio(participantes);
    setResultado(resultado);
  };
};
