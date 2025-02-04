import React from "react";
import BarraNav from "../componentes/main/Nav";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
        <BarraNav />
      <h1>404 - Página não encontrada</h1>
      <p>A página pedida não existe.</p>
    </div>
  );
}

export default NotFound;