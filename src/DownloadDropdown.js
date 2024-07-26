import React from "react";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";

const DownloadDropdown = ({ handlePreview }) => (
  <Dropdown as={ButtonGroup} className="mb-3">
    <Button variant="primary">Download</Button>
    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
    <Dropdown.Menu>
      <Dropdown.Item onClick={() => handlePreview("pdf")}>
        Preview as PDF
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handlePreview("word")}>
        Preview as Word
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handlePreview("rtf")}>
        Preview as RTF
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default DownloadDropdown;
