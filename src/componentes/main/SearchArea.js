import React, { useState } from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { fetchMedia } from "../../serviços/Pesquisa";
import MediaSearchLista from "../listas/MediaSearchLista"; // Componente para filmes com todos os dados

function SearchArea({ handleClose }) {
  // Estado do termo de pesquisa
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para armazenar os filmes encontrados
  const [medias, setmedias] = useState([]);

  // Função para atualizar o estado do termo de pesquisa
  async function handleChange(event) {
    // Atualiza o estado do termo de pesquisa
    setSearchTerm(event.target.value);
  }

  // Função para lidar com o envio do formulário
  async function handleSubmit(e) {
    // Evita o recarregamento da página
    e.preventDefault();
    // Se não houver termo de pesquisa não acontece nada
    if (!searchTerm.trim()) return;

    // Chama a função da API para procurar os filmes
    const foundmedias = await fetchMedia(searchTerm);
    // Atualiza o estado com os filmes encontrados
    setmedias(foundmedias);

    // Limpa o campo de pesquisa
    setSearchTerm("");

  }

  return (
    <Container>
      {/* Formulário para a pesquisa */}
      <form onSubmit={handleSubmit}>
        <InputGroup className="my-5">
          <FormControl
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Pesquisar filmes..."
          />
          <Button type="submit" variant="outline-secondary">
            Pesquisar
          </Button>
        </InputGroup>
      </form>
      {/* Exibe a lista de filmes encontrados */}
      <MediaSearchLista medias={medias} handleClose={handleClose} />
    </Container>
  );
}

export default SearchArea;
