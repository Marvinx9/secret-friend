import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";

jest.mock("../../state/hook/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

jest.mock("../../state/hook/useSorteador", () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

describe("Rodape not enough participants", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });
  test(`Can't start the game`, () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).toBeDisabled();
  });
});

describe("When exists enough participants", () => {
  const participantes = ["Ana", "Maria", "Alice"];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  test("The game is okay for start", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).not.toBeDisabled();
  });

  test("The game is inicialized", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    fireEvent.click(botao);

    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
