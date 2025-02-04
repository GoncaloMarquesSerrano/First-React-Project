import SeriesAiring from "../../componentes/dropdowns/SeriesAiring";
import React from "react";
import BarraNav from "../../componentes/main/Nav";
import Footer from "../../componentes/Footer";

function AiringS() {
    return (
        <div>
            <BarraNav />
            <h1 className="text-center font-weight-bold m-4" style={{ fontSize: 50}}>Séries a Estrear</h1>
            <SeriesAiring />
            <Footer />
        </div>
    );
}

export default AiringS;