import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { fetchInfo, fetchTvVideos, fetchTvCredits } from "../../serviços/Info";
import BarraNav from "../../componentes/main/Nav";
import Footer from "../../componentes/Footer";
import ComentaryArea from "../../componentes/UI/ComentaryArea";
import Comments from "../../componentes/UI/Comments";

function Serie() {
  const { serieId } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);
  const [credits, setCredits] = useState([]);
  const user = localStorage.getItem("user");

  useEffect(() => {
    async function loadInfo() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchInfo(serieId, "tv");
        const videoData = await fetchTvVideos(serieId);
        const creditData = await fetchTvCredits(serieId);

        if (data && videoData && creditData) {
          setInfo(data);
          setVideos(videoData);
          setCredits(creditData);
        } else {
          setError("Informações da série não encontradas.");
        }
      } catch (err) {
        setError("Erro ao carregar as informações da série.");
        console.error(err);
      }
      setLoading(false);
    }

    loadInfo();
  }, [serieId]);

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
    return <p>Erro ao carregar a informação da série.</p>;
  }

  const { title, imageUrl, overview, release_date, vote_average } = info;

  return (
    <div>
      <BarraNav />
      <Container className="mt-4">
        <Row className="mb-4">
          <Col md={4}>
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
              <strong style={{ fontSize: 28 }}>Estreia:</strong>{" "}
              <span style={{ fontSize: 25 }}>{release_date || "N/A"}</span>
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
            <Col key={video.key} md={6} className="mb-3">
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
          <h2 style={{ fontSize: 45 }}>Elenco</h2>
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
          <ComentaryArea moviePage={serieId} user={user} />
          <Comments movieId={serieId} />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Serie;
