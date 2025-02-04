import React from "react";
import { useState, useEffect } from "react";
import { fetchTrends } from "../../serviços/Tendencias"; 
import FilmeLista from "../listas/FilmeLista";

function Trending() {
  // Estado para armazenar os filmes que estão nas tendências
  const [trends, setTrends] = useState([]);
  // Estado para armazenar o estado de carregamento
  const [loading, setLoading] = useState(true);

  // Função para procurar pelos filmes nas tendências
  async function getTrends() {
    // Chama a função da API para procurar os filmes nas tendências
    const trends = await fetchTrends();
    // Atualiza o estado com os filmes encontrados
    setTrends(trends);
    // Atualiza o estado de carregamento
    setLoading(false);
  }

  // Quando o componente for montado, chama a função para procurar os filmes
  useEffect(() => {
    getTrends();
  }, []);

  // Renderiza a lista de filmes com a informação de carregamento
  return <FilmeLista movies={trends} loading={loading} />;;
}

export default Trending;
