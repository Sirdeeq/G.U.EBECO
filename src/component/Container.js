import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function CustomContainer({ children }) {
  return (
    <Container
      fluid
      className="h-100 d-flex align-items-center justify-content-center"
    >
      <Row>
        <Col className="text-center">{children}</Col>
      </Row>
    </Container>
  );
}
