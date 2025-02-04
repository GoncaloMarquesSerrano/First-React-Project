import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Footer from "../componentes/Footer";
import BarraNav from "../componentes/main/Nav";
import { checkRepeatedUser, post } from "../serviços/SheetyRequests";
import { useNavigate } from "react-router-dom";

function Registo() {
  // Estado para armazenar os dados do formulário
  const [user, setUser ] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Função para lidar com o envio do formulário
  async function handleSubmit(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Verifica se os campos estão vazios
    if (!user || !password) {
      alert("Por favor, preencha todos os campos.");
      return; // Impede o envio do formulário
    }

    const loginData = {
      "folha1": {
        "user": user,
        "password": password,
      }, 
    };

    try {
      
      // Chama a função post para adicionar um novo utilizador
      const userExists = await checkRepeatedUser(user); // Verifica se o utilizador já existe
      if (!userExists) {
        await post(loginData); // Adiciona o novo utilizador
        // Se a resposta for verdadeira, armazena o estado do login no localStorage
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", user);
        navigate("/"); // Redireciona para a página inicial
      } else {
        alert("Utilizador já existe");
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }

  }

  return (
    <div className="grid-container">
      <BarraNav />
      <Container>
        <Row>
          <Col>
            <h1>Registar</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>User</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="User "
                  value={user}
                  onChange={(e) => setUser (e.target.value)} // Atualiza o estado do user
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da pass
                />
              </Form.Group>
              <Button variant="danger" type="submit" className="m-3">
                Registar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Registo;