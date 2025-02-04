import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MediaSearchUI({
  title,
  image,
  overview,
  release_date,
  vote_average,
  media_type,
  mediaId,
  handleClose,
}) {
  // Gera a URL da imagem ou usa um placeholder
  const imageUrl = image
    ? `https://image.tmdb.org/t/p/w500/${image}`
    : "https://via.placeholder.com/500x750?text=Sem+Imagem";

  const navigate = useNavigate();

  function handleClick() {
    const path =
      media_type === "movie" ? `/filme/${mediaId}` : `/tv/${mediaId}`;
    handleClose();
    navigate(path);
  }
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={imageUrl} alt={title} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {overview || "Descrição não disponível"}
          </Card.Text>
          <Card.Text>
            <small>Tipo: {media_type === "movie" ? "Filme" : "Série"}</small>
            <br />
            <small>Estreia: {release_date || "N/A"}</small>
            <br />
            <small>Pontuação: {vote_average || "N/A"}</small>
          </Card.Text>
          <Button onClick={handleClick} variant="danger">
            Ver mais
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MediaSearchUI;
