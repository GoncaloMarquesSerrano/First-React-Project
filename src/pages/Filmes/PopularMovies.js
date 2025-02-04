import React from "react";
import FilmesPopular from "../../componentes/dropdowns/FilmesPopular";
import BarraNav from "../../componentes/main/Nav";
import Footer from "../../componentes/Footer";

function PopularMovies() {
    return (
        <div>
            <BarraNav />
            <h1 className="text-center font-weight-bold m-4" style={{ fontSize: 50}}>Filmes Populares</h1>
            <FilmesPopular />
            <Footer />
        </div>
    );
}

export default PopularMovies;