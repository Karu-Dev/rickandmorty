import React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps
} from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { CharComponent } from "./componentComponents/charStatus";

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
  character: Character;
}
export interface Character {
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

const mee6: Character = {
  name: "Mr. Meeseeks",
  status: "unknown",
  species: "Humanoid",
  gender: "Male",
  image: "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
  origin: {
    dimension: "unknown",
    name: "Mr. Meeseeks Box"
  }
};
export const Character: React.FC<MatchProps> = ({ match }) => {
  const { loading, error, data } = useQuery<Characters, CharactersVariables>(
    FETCH_CHARACTER,
    { variables: { id: parseInt(match.params.id) } }
  );
  const char = loading || !data ? mee6 : data.character;
  console.log(char);
  return (
    <Container>
      <style type="text/css">
        {`
    table{
      border:1px solid black;
    }
    `}
      </style>
      <Row>
        <Col sm={8}>
          <h1>{char.name}</h1>
        </Col>
        <Col sm={4}>
          <img src={char.image} />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>Some witty text about our hero that's not really provided by our API</Col>
        <Col sm>
          <CharComponent
            name={char.name}
            origin={char.origin}
            species={char.species}
            image={char.image}
            gender={char.gender}
            status={char.status}
          />
        </Col>
      </Row>
    </Container>
  );
};
