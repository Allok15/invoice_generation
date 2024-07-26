import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const SignatureModal = ({ showModal, handleClose, signatureName, handleSignatureNameChange, addSignature }) => (
  <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Digital Signature</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formSignatureName">
          <Form.Label>Enter your name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            value={signatureName}
            onChange={handleSignatureNameChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={addSignature}>
          Sign Document
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);

export default SignatureModal;
