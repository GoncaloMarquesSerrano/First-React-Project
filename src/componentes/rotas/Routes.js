import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../../pages/Inicio"; // Página inicial
import Filme from "../../pages/Filmes/Filme"; // Página de detalhes do filme
import Serie from "../../pages/Series/Serie"; // Página de detalhes da série
import NotFound from "../../pages/NotFound"; // Página para rotas inexistentes
import Login from "../../pages/Login"; // Página de login
import Airing from "../../pages/Filmes/AiringMovies"; // Página de filmes a estrear
import Popular from "../../pages/Filmes/PopularMovies"; // Página de filmes populares
import Top from "../../pages/Filmes/TopMovies"; // Página de filmes mais bem avaliados
import Upcoming from "../../pages/Filmes/UpcomingMovies";
import AiringS from "../../pages/Series/AiringSeries"; // Página de series a estrear
import PopularS from "../../pages/Series/PopularSeries"; // Página de series populares
import TopS from "../../pages/Series/TopSeries"; // Página de series mais bem avaliadas
import UpcomingS from "../../pages/Series/UpcomingSeries"; // Página de series mais aguardadas
import Registo from "../../pages/Registo";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Inicio />} />
        {/* Rota para página 404 */}
        <Route path="*" element={<NotFound />} />
        {/* Rota para página de login */}
        <Route path="/login" element={<Login />} />
        {/* Rota para página de registo */}
        <Route path="/registo" element={<Registo />} />

        {/*Rotas protegidas*/}

        {/* Rota para a página de detalhes do filme */}
        <Route
          path="/filme/:movieId"
          element={<PrivateRoute element={<Filme />} />}
        />
        {/* Rota para a página de detalhes da série */}
        <Route
          path="/tv/:serieId"
          element={<PrivateRoute element={<Serie />} />}
        />
        {/*Rota para página de filmes a estrear */}
        <Route
          path="/estrear"
          element={<PrivateRoute element={<Airing />} />}
        />
        {/* Rota para página de filmes populares */}
        <Route
          path="/popular"
          element={<PrivateRoute element={<Popular />} />}
        />
        {/* Rota para página de filmes mais bem avaliados */}
        <Route path="/top" element={<PrivateRoute element={<Top />} />} />
        {/* Rota para página de filmes mais aguardados */}
        <Route
          path="/upcoming"
          element={<PrivateRoute element={<Upcoming />} />}
        />
        {/*Rota para página de series a estrear */}
        <Route
          path="/estrearS"
          element={<PrivateRoute element={<AiringS />} />}
        />
        {/* Rota para página de series populares */}
        <Route
          path="/popularS"
          element={<PrivateRoute element={<PopularS />} />}
        />
        {/* Rota para página de series mais bem avaliadas */}
        <Route path="/topS" element={<PrivateRoute element={<TopS />} />} />
        {/* Rota para página de series mais aguardados */}
        <Route
          path="/upcomingS"
          element={<PrivateRoute element={<UpcomingS />} />}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
