import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import ModalSearch from "./ModalSearch";
import logo from "../../imagem/image-r.png";
import { useNavigate } from "react-router-dom";
import '../css/Nav.css';

function BarraNav() {
  const [show, setShow] = useState(false); // Estado para controlar o modal
  const navigate = useNavigate(); // Inicializa o hook useNavigate
  const isLogged = localStorage.getItem("isLoggedIn") === "true"; // Converte para booleano

  const handleShow = () => setShow(true); // Abre o modal
  const handleClose = () => setShow(false); // Fecha o modal

  const handleClick = () => {
    navigate("/"); // Redireciona para a página inicial
  };

  const handleAiringClick = () => {
    navigate("/estrear"); // Redireciona para a página de filmes a estrear
  };

  const handlePopularClick = () => {
    navigate("/popular"); // Redireciona para a página de filmes populares
  };

  const handleTopClick = () => {
    navigate("/top"); // Redireciona para a página de filmes melhor classificados
  };

  const handleLogin = () => {
    navigate("/login"); // Redireciona para a página de login
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove o item do localStorage
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <Navbar bg="dark" expand="lg" className="py-3">
      {/* Logo e Nome do site */}
      <Navbar.Brand className="ms-3 fs-1 d-flex align-items-center" onClick={handleClick}>
        <img
          src={logo}
          alt="Logo CineCraft"
          width="150"
          height="100"
          className="me-2"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {/* Dropdown de Filmes */}
          <NavDropdown title={<span className="text-white">Filmes</span>} className="me-3 fs-4">
            <NavDropdown.Item onClick={handlePopularClick}>Populares</NavDropdown.Item>
            <NavDropdown.Item onClick={handleAiringClick}>Em exibição</NavDropdown.Item>
            <NavDropdown.Item href="#">Brevemente</NavDropdown.Item>
            <NavDropdown.Item onClick={handleTopClick}>Melhor Classificados</NavDropdown.Item>
          </NavDropdown>

          {/* Dropdown de Séries */}
          <NavDropdown title={<span className="text-white">Séries</span>} className="me-3 fs-4">
            <NavDropdown.Item href="#">Populares</NavDropdown.Item>
            <NavDropdown.Item href="#">A estrear</NavDropdown.Item>
            <NavDropdown.Item href="#">Brevemente</NavDropdown.Item>
            <NavDropdown.Item href="#">Melhor Classificados</NavDropdown.Item>
          </NavDropdown>

          {/* Links de Registro e Login desaparecem quando isLogged é true */}
          {!isLogged && (
            <div className="d-flex flex-column flex-lg-row">
              <Button
                style={{ backgroundColor: '#333', color: 'red', border: '1px solid black' }}
                className="me-3 mb-2 mb-lg-0 fs-4"
                onClick={handleLogin}
              >
                Login
              </Button>
              <Button
                style={{ backgroundColor: '#333', color: 'red', border: '1px solid black' }}
                className="me-3 fs-4"
              >
                Registo
              </Button>
            </div>
          )}
          {/* Botão de Logout aparece apenas quando isLogged é true */}
          {isLogged && (
            <Button
              style={{ backgroundColor: '#333', color: 'red', border: '1px solid black' }}
              className="me-3 fs-4"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
          {/* Botão de Pesquisa */}
          <Button
            variant="danger"
            className="me-3 fs-4"
            onClick={handleShow} // Abre o modal ao clicar
          >
            Pesquisa
          </Button>
        </Nav>
      </Navbar.Collapse>

      {/* Modal de Pesquisa */}
      <ModalSearch show ={show} handleClose={handleClose} />
    </Navbar>
  );
}

export default BarraNav;