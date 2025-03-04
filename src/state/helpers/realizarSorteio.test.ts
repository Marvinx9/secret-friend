import { realizarSorteio } from "./realizarSorteio";

describe("Secret friend shuffle", () => {
  test("Many participant not shuffer youself", () => {
    const participantes = [
      "Ana",
      "Maria",
      "Bruna",
      "Itala",
      "Carol",
      "Jessica",
    ];

    const sorteio = realizarSorteio(participantes);

    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);

      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
