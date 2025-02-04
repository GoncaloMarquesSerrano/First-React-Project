import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SerieUI({ serieId, name, image, first_air_date, vote_average}) {

  // Gera a URL da imagem ou usa um placeholder
  const imageUrl = image
    ? `https://image.tmdb.org/t/p/w500/${image}`
    : "https://via.placeholder.com/500x750?text=Sem+Imagem"; // Caso não tenha imagem

  const navigate = useNavigate();

     function handleClick(){
      navigate(`/tv/${serieId}`);
    };

  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={imageUrl} alt={name} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text>
            <small>Estreia: {first_air_date || "N/A"}</small>
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

export default SerieUI;
