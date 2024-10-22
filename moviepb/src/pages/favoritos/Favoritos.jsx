import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./favoritos.css";

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/pagemovie-PB/detalhes/${movieId}`);
  };

  return (
    <main>
      <div className="header-fav">
        <Header />
      </div>
      <h2>Filmes Favoritos</h2>
      <div className="movies">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div
              className="card-movies"
              key={movie.id}
              onClick={() => handleMovieClick(movie.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="information">
                <h3>{movie.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum filme favorito encontrado.</p>
        )}
      </div>
    </main>
  );
}
