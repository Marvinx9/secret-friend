import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

describe("Formulario", () => {
  test("When the input is empty, new participants cannot be added", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
  });

  test("Should add one peaple if name exists", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Adriana Silva" } });

    fireEvent.click(botao);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  test("Names duplicity not have increment on list", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Adriana Silva" } });
    fireEvent.click(botao);

    fireEvent.change(input, { target: { value: "Adriana Silva" } });
    fireEvent.click(botao);

    const mensagemErro = screen.getByRole("alert");
    expect(mensagemErro.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  test("Names duplicity have return message error for 2 seconds", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Adriana Silva" } });
    fireEvent.click(botao);

    fireEvent.change(input, { target: { value: "Adriana Silva" } });
    fireEvent.click(botao);
    let mensagemErro = screen.queryByRole("alert");

    expect(mensagemErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    mensagemErro = screen.queryByRole("alert");
    expect(mensagemErro).toBeNull();
  });
});
