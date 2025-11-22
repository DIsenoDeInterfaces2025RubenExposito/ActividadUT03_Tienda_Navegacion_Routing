// src/App.jsx
import React from "react";
import "./theme/styles/index.css";
import ProductGrid from "./components/ProductGrid.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Productos from "./pages/Productos.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";
function App() {
  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route element={<ProductGrid />} />
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Navigate to="/" />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Productos/:id" element={<DetalleProducto/>} />
          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>404 - Página no encontrada</h1>
                <p>La ruta que buscas no existe.</p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
