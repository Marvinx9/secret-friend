import { atom } from "recoil";

export const listaDeParticipantesState = atom<string[]>({
  key: "listaDeParticipantesState",
  default: [],
});

export const amigoSecreto = atom<Map<string, string>>({
  key: "amigoSecreto",
  default: new Map(),
});

export const erroState = atom<string>({
  key: "erroState",
  default: "",
});
