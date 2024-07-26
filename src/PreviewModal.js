import React from "react";
import { Modal, Button } from "react-bootstrap";

const PreviewModal = ({ previewType, previewContent, handleDownload, handleClose }) => (
  <Modal show={previewContent !== null} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Document Preview</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {previewContent && (
        <iframe src={previewContent} width="100%" height="600px" frameBorder="0" />
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleDownload}>
        Confirm Download
      </Button>
    </Modal.Footer>
  </Modal>
);

export default PreviewModal;
