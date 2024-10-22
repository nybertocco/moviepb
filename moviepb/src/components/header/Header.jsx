import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>NycFilmes</h1>

      <menu>
        <ul>
          <Link to="/pagemovie-PB/">
            <li>Home</li>
          </Link>
          <Link to="/pagemovie-PB/favoritos">
            <li>Favoritos</li>
          </Link>
        </ul>
      </menu>

      <input type="text" placeholder="Buscar" className="search" />
    </div>
  );
}
