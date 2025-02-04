import SeriesPopular from "../../componentes/dropdowns/SeriesPopular";
import React from "react";
import BarraNav from "../../componentes/main/Nav";
import Footer from "../../componentes/Footer";

function PopularS() {
    return (
        <div>
            <BarraNav />
            <h1 className="text-center font-weight-bold m-4" style={{ fontSize: 50}}>Séries Populares</h1>
            <SeriesPopular />
            <Footer />
        </div>
    );
}

export default PopularS;