const apiKey = process.env.REACT_APP_API_KEY;

export async function fetchInfo(id, type) {
  // URL base da API
  const baseUrl = `https://api.themoviedb.org/3`;
  // URL para obter informações de um filme ou série
  const url = `${baseUrl}/${type}/${id}?api_key=${apiKey}&language=en-US`;
  // Pedido à API
  try {
    const response = await fetch(url);
    const data = await response.json();
    const imageUrl = data.poster_path
      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
      : "https://via.placeholder.com/500x750?text=Sem+Imagem";
    return {
      title: data.title || data.name,
      imageUrl,
      overview: data.overview,
      release_date: data.release_date || data.first_air_date,
      vote_average: data.vote_average,
    };
  } catch (error) {
    // Exibe o erro na consola
    console.error("Erro", error);
    return [];
  }
}

export async function fetchAiringMovies() {
  const baseUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro", error);
    return [];
  }
}

export async function fetchPopularMovies() {
  const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro", error);
    return [];
  }
}

export async function fetchMovieVideos(id) {
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results.slice(1, 2) || [];
  } catch (error) {
    console.error("Erro", error);
    return [];
  }
}

export async function fetchTvVideos(id) {
  const baseUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results.slice(1, 2) || [];
  } catch (error) {
    console.error("Erro", error);
    return [];
  }
}

export async function fetchTopMovies() {
  const baseUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro", error);
    return [];
  }
}

export async function fetchUpcomingMovies() {
  const baseUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro", error);
    return [];
  }
}

export async function fetchAiringTv() {
  const baseUrl = `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro", error);
    return [];
  }
}

export async function fetchPopularTv() {
  const baseUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro", error);
    return [];
  }
}

export async function fetchTopTv() {
  const baseUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro", error);
    return [];
  }
}

export async function fetchUpcomingTv() {
  const baseUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro", error);
    return [];
  }
}

export async function fetchTvCredits(id) {
  const baseUrl = `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.cast.slice(0,12) || []; 
  } catch (error) {
    console.error("Erro ao carregar os créditos da série:", error);
    return [];
  }
}

export async function fetchMovieCredits(id) {
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data.cast.slice(0,12) || [];
  } catch (error) {
    console.error("Erro ao carregar os créditos do filme:", error);
    return [];
  }
}