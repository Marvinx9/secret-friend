import React from "react";
import { render, screen } from "@testing-library/react";
import Formulario from "./Formulario";

test("When the input is empty, new participants cannot be added", () => {
  render(<Formulario />);

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  const botao = screen.getByRole("button");

  expect(input).toBeInTheDocument();

  expect(botao).toBeDisabled();
});
