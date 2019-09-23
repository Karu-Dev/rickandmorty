import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Character } from "../character";
export const CharComponent: React.FC<Character> = ({
  name,
  status,
  gender,
  species,
  image,
  origin
}) => {
  let tableMargin = 15
  return (
    <Container style={{margin:0, padding:0}}>
      <Row style={{padding:0,margin:0}}>
        <Col sm="12">
          <img src={image} alt={name} width="100%"/>
        </Col>
      </Row>
      <Row>
        <Col style={{ border: "1px solid black", marginLeft:tableMargin}}>Status:</Col>
        <Col style={{ border: "1px solid black",borderLeft:"none",marginRight:tableMargin}}>{status}</Col>
      </Row>
      <Row>
        <Col style={{ border: "1px solid black", marginLeft:tableMargin}}>Gender:</Col>
        <Col style={{ border: "1px solid black",borderLeft:"none",marginRight:tableMargin}}>{gender}</Col>
      </Row>
      <Row>
        <Col style={{ border: "1px solid black", marginLeft:tableMargin}}>Species:</Col>
        <Col style={{ border: "1px solid black",borderLeft:"none",marginRight:tableMargin}}>{species}</Col>
      </Row>
      <Row>
        <Col style={{ border: "1px solid black", marginLeft:tableMargin}}>Origin:</Col>
        <Col style={{ border: "1px solid black",borderLeft:"none",marginRight:tableMargin}}>Planet {origin.name}</Col>
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
