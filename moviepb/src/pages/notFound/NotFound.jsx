import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./notFound.css";

export default function NotFound() {
  return (
    <div>
      <Header />

      <main>
        <p>Não há filmes e séries disponíveis.</p>
      </main>

      <Footer />
    </div>
  );
}
