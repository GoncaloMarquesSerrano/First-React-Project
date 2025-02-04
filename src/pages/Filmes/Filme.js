import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import {
  fetchInfo,
  fetchMovieVideos,
  fetchMovieCredits,
} from "../../serviços/Info";
import { get } from "../../serviços/SheetyRequests";
import BarraNav from "../../componentes/main/Nav";
import Footer from "../../componentes/Footer";
import ComentaryArea from "../../componentes/UI/ComentaryArea";
import Comments from "../../componentes/UI/Comments";

function Filme() {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);
  const [credits, setCredits] = useState([]);
  const [comments, setComments] = useState([]);
  const user = localStorage.getItem("user");

  useEffect(() => {
    async function loadInfo() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchInfo(movieId, "movie");
        const videoData = await fetchMovieVideos(movieId);
        const creditData = await fetchMovieCredits(movieId);

        if (data && videoData && creditData) {
          setInfo(data);
          setVideos(videoData);
          setCredits(creditData);
        } else {
          setError("Informações do filme não encontradas.");
        }
      } catch (err) {
        setError("Erro ao carregar as informações do filme.");
        console.error(err);
      }

      setLoading(false);
    }

    async function loadComments() {
      try {
        const data = await get();
        const movieComments = data.folha1.filter(
          (item) => item.MoviePage === movieId
        );
        setComments(movieComments);
      } catch (err) {
        console.error("Erro ao carregar os comentários:", err);
      }
    }

    loadInfo();
    loadComments();
  }, [movieId]);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
        <p>A carregar...</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!info) {
    return <p>Erro ao carregar a informação do filme.</p>;
  }

  const { title, imageUrl, overview, release_date, vote_average } = info;

  return (
    <div>
      <BarraNav />
      <Container className="mt-4">
        <Row className="mb-4">
          <Col xs={12} md={4}>
            <Card>
              <Card.Img variant="top" src={imageUrl} alt={title} />
            </Card>
          </Col>

          <Col md={8}>
            <h1 style={{ fontSize: 50 }}>{title}</h1>
            <p style={{ fontSize: 30 }}>
              {overview || "Descrição não disponível"}
            </p>
            <p>
              <strong className="h5">Estreia:</strong>{" "}
              <span className="h6">{release_date || "N/A"}</span>
            </p>
            <p>
              <strong style={{ fontSize: 28 }}>Pontuação:</strong>{" "}
              <span style={{ fontSize: 25 }}>{vote_average || "N/A"}</span>
            </p>
          </Col>
        </Row>
        <Row className="mb-4">
          <h2 style={{ fontSize: 45 }}>Vídeos</h2>
          {videos.map((video) => (
            <Col key={video.key} xs={12} md={6} className="mb-3">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Col>
          ))}
        </Row>
        <Row>
          <h2 className="h4">Elenco</h2>
          {credits.length > 0 ? (
            credits.map((actor) => (
              <Col key={actor.id} md={2} className="mb-4">
                <Card style={{ width: "150px" }}>
                  <Card.Img
                    variant="top"
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : "https://via.placeholder.com/150x225?text=Sem+Imagem"
                    }
                    style={{ height: "225px", objectFit: "cover" }}
                    alt={actor.name}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: 14 }}>
                      {actor.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>Elenco não encontrado.</p>
          )}
        </Row>
        <Row>
          <h2 style={{ fontSize: 45 }}>Comentários</h2>
          <ComentaryArea comments={comments} moviePage={movieId} user={user} />
          <Comments movieId={movieId} />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Filme;
