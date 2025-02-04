import React from "react";
import { Container, Row } from "react-bootstrap";
import SerieUI from "../UI/SerieUI";

function SerieLista({ series, loading }) {
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {loading ? (
          <div>A Carregar...</div>
        ) : (
          series.map((trend) => (
            <SerieUI
              serieId={trend.id}
              name={trend.name}
              image={trend.poster_path}
              first_air_date={trend.first_air_date}
              vote_average={trend.vote_average}
            />
          ))
        )}
      </Row>
    </Container>
  );
}

export default SerieLista;
