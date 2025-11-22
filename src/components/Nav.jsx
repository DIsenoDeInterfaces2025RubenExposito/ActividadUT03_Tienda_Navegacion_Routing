import { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * Componente de navegación responsive.
 * En desktop muestra los enlaces horizontalmente.
 * En móvil muestra un menú hamburguesa que se puede abrir/cerrar.
 *
 * @returns {JSX.Element} Navegación responsive con menú desktop y hamburguesa
 */
export default function BurgerNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="main-nav">
      {/* Desktop Menu */}
      <div className="nav-desktop">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/Productos" className="nav-link">
          Productos
        </NavLink>
      </div>

      {/* Mobile Menu (Burger) */}
      {/* <button onClick={() => setOpen(!open)}> ☰ </button> */}
      <nav className="burger-nav-container">
        <button className="burger-btn" onClick={() => setOpen(!open)}>
          <span className="burger-icon">{open ? "✕" : "☰"}</span>
        </button>

        {/* Menú controlado por el estado */}
        <nav className={`burger-menu ${open ? "burger-menu--open" : ""}`}>
          <NavLink
            to="/"
            className="burger-link"
            onClick={() => setOpen(false)}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/Productos"
            className="burger-link"
            onClick={() => setOpen(false)}
          >
            Productos
          </NavLink>
        </nav>
      </nav>
    </nav>
  );
}
