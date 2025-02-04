import React from "react";
import { Container, Row } from "react-bootstrap";
import FilmeUI from "../UI/FilmeUI";


function FilmeLista({ movies, loading }) {
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {loading ? (
          <div>A Carregar...</div>
        ) : (
          movies.map((trend) => (
            <FilmeUI
              movieid={trend.id}
              title={trend.title}
              image={trend.poster_path}
              release_date={trend.release_date}
              vote_average={trend.vote_average}
            />
          ))
        )}
      </Row>
    </Container>
  );
}

export default FilmeLista;
