const apiKey = process.env.REACT_APP_API_KEY;

export async function fetchTrends() {
  try {
    // Faz o pedido à API
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=en-US`
    );
    // Converte a resposta para JSON
    const data = await response.json();
    // Devolve os filmes encontrados ou um array vazio
    return data.results.slice(0,3) || []; // Devolve só os 3 primeiros resultados
    // Se houver erro, exibe na consola e devolve um array vazio
  } catch (error) {
    console.error("Erro na procura da tendencias:", error);
    return [];
  }
}
