import React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps
} from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
interface MatchParams {
  id: string;
}
interface MatchProps extends RouteComponentProps<MatchParams> {}

const FETCH_CHARACTER = gql`
  query fecthCharacters($id: ID!) {
    character(id: $id) {
      name
      status
      species
      image
      gender
      origin {
        dimension
        name
      }
    }
  }
`;
interface CharacterData {
  character: Characters;
}
interface Characters {
  results: Character[];
}
interface Character {
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  origin: Origin;
}
interface CharactersVariables {
  id: number;
}
interface Origin {
  dimension: string;
  name: string;
}

export const Character: React.FC<MatchProps> = ({ match }) => {
  const { loading, error, data } = useQuery<CharacterData, CharactersVariables>(
    FETCH_CHARACTER,
    { variables: { id: parseInt(match.params.id) } }
  );
  const char = loading || !data ? {} : data.character;
  console.log(char);
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <h1>{char.name}</h1>
        </Col>
        <Col sm={4}>Pepega</Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  );
};
