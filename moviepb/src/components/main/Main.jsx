import "./main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const apiKey = "af40f57257698e1c4cf783f1cfbe5dfc";
  const navigate = useNavigate();

  const getPopularMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            language: "pt-BR",
            api_key: apiKey,
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Ocorreu um erro: ", error);
    }
  };

  const searchMovies = async (query) => {
    if (!query) {
      getPopularMovies();
      return;
    }
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            query,
            language: "pt-BR",
            api_key: apiKey,
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Erro na busca: ", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchMovies(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const toggleFavorite = (movie) => {
    const isFavorite = favorites.some((fav) => fav.id === movie.id);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleMovieClick = (movieId) => {
    navigate(`/moviepb/detalhes/${movieId}`);
  };

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <main>
        <h2>Filmes</h2>
        <div className="movies">
          {movies.map((movie) => (
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
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(movie);
                  }}
                >
                  {favorites.some((fav) => fav.id === movie.id)
                    ? "Desfavoritar"
                    : "Favoritar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
