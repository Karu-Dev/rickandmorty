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
      episode {
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
  episode: Episode[];
}
interface CharactersVariables {
  id: number;
}
interface Origin {
  dimension: string;
  name: string;
}
interface Episode {
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
  },
  episode: [{ name: "" }]
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
      <Row>
        <Col sm={8} style={{border:"1px solid black", borderRight:"none"}}>
          <Row>
            <h1>{char.name}</h1>
          </Row>
          <Row>
            <Col>
              <div>
                <b>
                  In episodes: <br />
                </b>
              </div>
              {char.episode.map(it => (
                it.name + ", "
              ))}
            </Col>
          </Row>
        </Col>
        <Col sm={4} style={{border:"1px solid black",padding:0,margin:0}}>
          <CharComponent
            name={char.name}
            origin={char.origin}
            species={char.species}
            image={char.image}
            gender={char.gender}
            status={char.status}
            episode={char.episode}
          />
        </Col>
      </Row>
    </Container>
  );
};
