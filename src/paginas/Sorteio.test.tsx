import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Sorteio from "./Sorteio";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";

const mockNavegacao = jest.fn();

jest.mock("../state/hook/useListaDeParticipantes", () => {
  return { useListaDeParticipantes: jest.fn() };
});

jest.mock("../state/hook/useResultadoSorteio", () => {
  return { useResultadoSorteio: jest.fn() };
});

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("Sorteio", () => {
  const participantes = ["Ana", "Catarina", "Jorel"];

  const resultado = new Map([
    ["Ana", "Jorel"],
    ["Catarina", "Ana"],
    ["Jorel", "Catarina"],
  ]);

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });

  test("All participants friend raffle okay display", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen
      .queryAllByRole("option")
      .filter((option) => (option as HTMLOptionElement).value !== "");

    expect(opcoes).toHaveLength(3);
  });
});
