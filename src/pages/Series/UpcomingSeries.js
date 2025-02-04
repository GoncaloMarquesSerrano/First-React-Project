import SeriesUpcoming from "../../componentes/dropdowns/SeriesUpcoming";
import React from "react";
import BarraNav from "../../componentes/main/Nav";
import Footer from "../../componentes/Footer";

function UpcomingS() {
    return (
        <div>
            <BarraNav />
            <h1 className="text-center font-weight-bold m-4" style={{ fontSize: 50}}>Séries mais Esperadas</h1>
            <SeriesUpcoming />
            <Footer />
        </div>
    );
}

export default UpcomingS;