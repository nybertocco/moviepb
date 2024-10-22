import "./details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = "af40f57257698e1c4cf783f1cfbe5dfc";

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              language: "pt-BR",
              api_key: apiKey,
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do filme: ", error);
      }
    };

    getMovieDetails();
  }, [id]);

  if (!movie) return <p>Carregando...</p>;

  return (
    <div className="details">
      <div className="header-details">
        <Header />
      </div>
      <div className="details-content">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="text-content">
          <h2>{movie.title}</h2>
          <p>Sinopse: {movie.overview}</p>
          <p>Nota: {movie.vote_average}</p>
          <p>Data de lançamento: {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}
