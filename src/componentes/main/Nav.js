import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import ModalSearch from "./ModalSearch";
import logo from "../../imagem/image-r.png";
import { useNavigate } from "react-router-dom";

function BarraNav() {
  const [show, setShow] = useState(false); // Estado para controlar o modal
  const navigate = useNavigate(); // Inicializa o hook useNavigate
  const isLogged = localStorage.getItem("isLoggedIn") === "true"; // Verifica se o utilizador está logado

  const handleShow = () => setShow(true); // Abre o modal
  const handleClose = () => setShow(false); // Fecha o modal

  const goMain = () => {
    navigate("/"); // Redireciona para a página inicial
  };

  const goAiring = () => {
    navigate("/estrear"); // Redireciona para a página de filmes a estrear
  };

  const goPopular = () => {
    navigate("/popular"); // Redireciona para a página de filmes populares
  };

  const goTop = () => {
    navigate("/top"); // Redireciona para a página de filmes melhor classificados
  };

  const goUpcoming = () => {
    navigate("/upcoming"); // Redireciona para a página de filmes brevemente
  };

  const goAiringS = () => {
    navigate("/estrearS"); // Redireciona para a página de séries a estrear
  };

  const goPopularS = () => {
    navigate("/popularS"); // Redireciona para a página de séries populares
  };

  const goTopS = () => {
    navigate("/topS"); // Redireciona para a página de séries melhor classificadas
  };

  const goUpcomingS = () => {
    navigate("/upcomingS"); // Redireciona para a página de séries brevemente
  };

  const goLogin = () => {
    navigate("/login"); // Redireciona para a página de login
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove o item do localStorage
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <Navbar bg="dark" expand="lg" className="py-3">
      {/* Logo e Nome do site */}
      <Navbar.Brand
        className="ms-3 fs-1 d-flex align-items-center"
        onClick={goMain}
        style={{
          cursor: "pointer",
        }}
      >
        <img
          src={logo}
          alt="Logo CineCraft"
          width="150"
          height="100"
          className="me-2"

        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {/* Dropdown de Filmes */}
          <NavDropdown
            title={<span className="text-white">Filmes</span>}
            className="me-3 fs-4"
          >
            <NavDropdown.Item onClick={goPopular}>
              Populares
            </NavDropdown.Item>
            <NavDropdown.Item onClick={goAiring}>
              Em exibição
            </NavDropdown.Item>
            <NavDropdown.Item onClick={goUpcoming}>
              Brevemente
            </NavDropdown.Item>
            <NavDropdown.Item onClick={goTop}>
              Melhor Classificados
            </NavDropdown.Item>
          </NavDropdown>

          {/* Dropdown de Séries */}
          <NavDropdown
            title={<span className="text-white">Séries</span>}
            className="me-3 fs-4"
          >
            <NavDropdown.Item onClick={goPopularS}>
              Populares
            </NavDropdown.Item>
            <NavDropdown.Item onClick={goAiringS}>
              A estrear
            </NavDropdown.Item>
            <NavDropdown.Item onClick={goUpcomingS}>
              Brevemente
            </NavDropdown.Item>
            <NavDropdown.Item onClick={goTopS}>
              Melhor Classificados
            </NavDropdown.Item>
          </NavDropdown>

          {/* Condicional para mostrar os botões de Login e Registo */}
          {!isLogged && (
              <Button
                style={{ backgroundColor: '#333', color: 'red', border: '1px solid black' }}
                className="me-3 fs-4"
                onClick={goLogin}
              >
                Login
              </Button>
          )}
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
      <ModalSearch show={show} handleClose={handleClose} />
    </Navbar>
  );
}

export default BarraNav;