import { Link } from "react-router-dom";
import "./header.css";

export default function Header({ onSearch }) {
  return (
    <div className="header">
      <h1>NycFilmes</h1>

      <menu>
        <ul>
          <Link to="/moviepb/">
            <li>Home</li>
          </Link>
          <Link to="/moviepb/favoritos">
            <li>Favoritos</li>
          </Link>
        </ul>
      </menu>

      <input
        type="text"
        placeholder="Buscar"
        className="search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
