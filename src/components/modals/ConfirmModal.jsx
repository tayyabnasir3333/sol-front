import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ConfirmModal({ show, onClose, onConfirm }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to perform action?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
        <Button variant='danger' onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
