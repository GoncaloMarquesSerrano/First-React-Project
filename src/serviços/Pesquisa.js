const apiKey = process.env.REACT_APP_API_KEY;

export async function fetchMedia(searchTerm) {
  try {
    // Faz o pedido à API
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(
        searchTerm
      )}&language=en-US`
    );
    // Converte a resposta para JSON
    const data = await response.json();
    // Filtra apenas filmes e séries
    const filteredResults = (data.results || []).filter(
      (item) => item.media_type === "movie" || item.media_type === "tv"
    );
    return filteredResults;
  } catch (error) {
    // Exibe o erro na consola
    console.error("Erro na busca:", error);
    return [];
  }
}
