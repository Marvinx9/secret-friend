import { render, screen } from "@testing-library/react";
import React from "react";

test("When the input is empty, new participants cannot be added", () => {
  render(<Formulario />);

  const input = screen.getAllByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  const botao = screen.getByRole("button");

  expect(input).toBeInTheDocument();

  expect(botao).toBeDisabled();
});
