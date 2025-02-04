import React, { useEffect, useState } from 'react';
import { get } from '../../serviços/SheetyRequests';
import { Card } from 'react-bootstrap';

function Comments({ movieId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function loadComments() {
      try {
        const data = await get();
        const movieComments = data.folha1.filter(
          item => String(item.moviePage) === String(movieId) && item.comment && item.comment.length > 0
        );
        setComments(movieComments);
      } catch (error) {
        console.error('Erro a carregar comentários: ', error);
      }
    }

    loadComments();
  }, [movieId]);

  return (
    <div>
      <br></br>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title style={{color: 'darkred'}}>{comment.user}</Card.Title>
              <Card.Text>{comment.comment}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Sem comentários.</p>
      )}
    </div>
  );
}

export default Comments;