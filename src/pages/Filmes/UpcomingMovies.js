import FilmesUpcoming from "../../componentes/dropdowns/FilmesUpcoming";
import React from "react";
import BarraNav from "../../componentes/main/Nav";
import Footer from "../../componentes/Footer";

function Upcoming() {
    return (
        <div>
            <BarraNav />
            <h1 className="text-center font-weight-bold m-4" style={{ fontSize: 50}}>Filmes mais Esperados</h1>
            <FilmesUpcoming />
            <Footer />
        </div>
    );
}

export default Upcoming;