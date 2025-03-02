import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

test("When the input is empty, new participants cannot be added", () => {
  render(<Formulario />);

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
