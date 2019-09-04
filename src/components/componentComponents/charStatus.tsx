import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Character } from "../character";
export const CharComponent: React.FC<Character> = ({name,status,gender,species,image,origin}) => {
  return (
    <Container>
      <Row>
        <Col>Status:</Col>
        <Col>{status}</Col>
      </Row>
      <Row>
          <Col>Gender:</Col>
          <Col>{gender}</Col>
      </Row>
      <Row>
          <Col>Species:</Col>
          <Col>{species}</Col>
      </Row>
      <Row>
          <Col>Origin:</Col>
          <Col>Planet {origin.name}</Col>
      </Row>
      <Row>
          <Col></Col>
          <Col>{}</Col>
      </Row>
      <Row>
          <Col></Col>
          <Col>{}</Col>
      </Row>
    </Container>
  );
};
