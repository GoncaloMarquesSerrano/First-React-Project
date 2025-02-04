import React from "react";
import BarraNav from "../componentes/main/Nav";
import Trending from "../componentes/main/Trending";
import Footer from "../componentes/Footer";

function Inicio() {
  return (
    <div>
      <BarraNav /> 
      <br></br>
      <Trending />
      <Footer />
    </div>
  );
}

export default Inicio;
