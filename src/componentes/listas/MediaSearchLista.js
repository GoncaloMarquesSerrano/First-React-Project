import React from "react";
import { Container, Row } from "react-bootstrap";
import MediaSearchUI from "../UI/MediaSearchUI";

function MediaSearchLista({ medias, handleClose }) {
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {medias.length > 0 ? (
          medias.map((media) => (
            <MediaSearchUI
              mediaId={media.id}
              title={media.title || media.name} // 'title' para filmes e 'name' para séries
              image={media.poster_path}
              overview={media.overview}
              release_date={media.release_date || media.first_air_date} // 'release_date' para filmes, 'first_air_date' para séries
              vote_average={media.vote_average}
              media_type={media.media_type} // Identifica o tipo de media
              handleClose={handleClose}
            />
          ))
        ) : (
          <div>Não foi possível encontrar nenhum filme ou série</div>
        )}
      </Row>
    </Container>
  );
}

export default MediaSearchLista;


