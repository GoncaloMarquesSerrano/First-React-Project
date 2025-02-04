import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Footer from "../componentes/Footer";
import BarraNav from "../componentes/main/Nav";
import { checkUserExists } from "../serviços/SheetyRequests";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const loginData = {
      folha1: {
        user: user,
        password: password,
      },
    };
  
    try {
      const userExists = await checkUserExists(loginData); 
      if (userExists) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", user);
        navigate("/");
      } else {
        alert("User  ou Password incorretos");
      }
    } catch (error) {
      console.error("Erro ao realizar o GET:", error.message);
      throw error;
    }
  }

  const goRegisto = () => {
    navigate("/registo");
  };

  return (
    <div className="grid-container">
      <BarraNav />
      <Container className="content">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <h1 className="text-center">Login</h1>
            <p className="text-center">
              Ainda não está registado?
              <span className="registo-link" onClick={goRegisto}>
                {" "}
                Registe-se aqui
              </span>
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>User</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="User "
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="danger" type="submit" className="m-3 w-100">
                Entrar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;