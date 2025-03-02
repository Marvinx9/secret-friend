import React from "react";
import Formulario from "./componentes/Formulario/Formulario";
import Cabecalho from "./componentes/Cabecalho";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={Formulario} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
