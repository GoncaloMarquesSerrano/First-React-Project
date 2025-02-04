import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { post } from "../../serviços/SheetyRequests";

function ComentaryArea({ moviePage, user }) {
  const [comment, setComment] = useState("");

  async function handleCommentSubmit(e) {
    e.preventDefault();

    const newComment = {
      folha1: {
        user: user,
        comment: comment,
        moviePage: moviePage
      }
    };

    try {
      await post(newComment);
      setComment("");
      window.location.reload();
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar o comentário.");
    }
  }

  return (
    <Form onSubmit={handleCommentSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="danger" type="submit" className="me-3 fs-4">
        Enviar
      </Button>
    </Form>
  );
}

export default ComentaryArea;