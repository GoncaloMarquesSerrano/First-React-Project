import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 style={{color: 'red'}}>Sobre Nós</h5>
            <p>
              Oferecemos as melhores recomendações em filmes e séries
            </p>
          </Col>
          <Col md={4}>
            <h5 style={{color: 'red'}}>Links Úteis</h5>
            <ul className="list-unstyled">
              
              <li>
                  Sobre
              </li>
              <li>
                  Contato
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={{color: 'red'}}>Contato</h5>
            <p>
              Email: yyy.com <br />
              Email: zzz.com
            </p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} CineCraft. Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
