import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

import Header from "./components/Header";

import Erro from "./pages/Erro";

import Produtos from "./pages/Produtos";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />

        <Route path="*" element={<Erro />} />

        <Route path="/produtos/:id" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

//BrowserRouter: habilita o uso de rotas, monitorando a URL do navegador.
