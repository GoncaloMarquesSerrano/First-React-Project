import React from "react";
import { Modal } from "react-bootstrap";
import SearchArea from "./SearchArea";

function ModalSearch({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" dialogClassName="modal-dialog">
      <Modal.Header closeButton={handleClose}>
        <Modal.Title>Pesquisar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SearchArea handleClose={handleClose} />
      </Modal.Body>
    </Modal>

  );
}

export default ModalSearch;
