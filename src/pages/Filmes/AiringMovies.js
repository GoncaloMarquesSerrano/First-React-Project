import FilmesAiring from "../../componentes/dropdowns/FilmesAiring";
import React from "react";
import BarraNav from "../../componentes/main/Nav";
import Footer from "../../componentes/Footer";

function Airing() {
    return (
        <div>
            <BarraNav />
            <h1 className="text-center font-weight-bold m-4" style={{ fontSize: 50}}>Filmes a Estrear</h1>
            <FilmesAiring />
            <Footer />
        </div>
    );
}

export default Airing;