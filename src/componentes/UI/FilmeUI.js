import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FilmeUI({ movieid, title, image, release_date, vote_average}) {

  // Gera a URL da imagem ou usa um placeholder
  
  const imageUrl = image
    ? `https://image.tmdb.org/t/p/w500/${image}`
    : "https://via.placeholder.com/500x750?text=Sem+Imagem"; // Caso não tenha imagem

    const navigate = useNavigate();

     function handleClick(){
      navigate(`/filme/${movieid}`);
    };

  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={imageUrl} alt={title} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text>
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

export default FilmeUI;
