import React from "react";
import { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";

function Size() {
  const [size, setSize] = useState("");
  return (
    <>
      <Form.Select
        style={{ width: "8rem", margin: "1rem" }}
        size="sm"
        aria-label="Default select example"
        onChange={(e) => {
          const selectedSize = e.target.value;
          setSize(selectedSize);
        }}
      >
        <option>Size</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">Extra Large</option>
      </Form.Select>
    </>
  );
}

export default Size;
