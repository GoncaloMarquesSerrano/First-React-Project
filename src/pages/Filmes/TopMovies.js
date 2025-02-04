import FilmesTop from "../../componentes/dropdowns/FilmesTop";
import React from "react";
import BarraNav from "../../componentes/main/Nav";
import Footer from "../../componentes/Footer";

function Top() {
    return (
        <div>
            <BarraNav />
            <h1 className="text-center font-weight-bold m-4" style={{ fontSize: 50}}>Melhores Filmes</h1>
            <FilmesTop />
            <Footer />
        </div>
    );
}

export default Top;