import SeriesTop from "../../componentes/dropdowns/SeriesTop";
import React from "react";
import BarraNav from "../../componentes/main/Nav";
import Footer from "../../componentes/Footer";

function TopS() {
    return (
        <div>
            <BarraNav />
            <h1 className="text-center font-weight-bold m-4" style={{ fontSize: 50}}>Melhores Séries</h1>
            <SeriesTop />
            <Footer />
        </div>
    );
}

export default TopS;