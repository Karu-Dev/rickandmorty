import React from "react";
import { Card, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
let pageNumber = 0;
const FETCH_CHARACTERS = gql`
  query fecthCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
        species
      }
    }
  }
`;
interface CharacterData {
  characters: Characters;
}
interface Characters {
  results: Character[];
}
interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}
interface CharactersVariables {
  page: number;
}
export const Body: React.FC = () => {
  const { loading, error, data } = useQuery<CharacterData, CharactersVariables>(
    FETCH_CHARACTERS,
    { variables: { page: pageNumber } }
  );
  const characters = loading || !data ? [] : data.characters.results;
  return (
    <Container>
      <Row>
        {loading ? (
          <Spinner animation="grow" />
        ) : (
          characters.map((it: any, i: any) => (
            <Col key={i}>
              <Card
                style={{
                  width: "18rem",
                  margin: 10,
                  backgroundColor: "rgb(64, 69, 79)"
                }}
              >
                <Card.Img variant="top" src={it.image} />
                <Card.Body>
                  <Card.Title>{it.id}</Card.Title>
                  <Card.Text>{it.name}</Card.Text>
                  <Card.Text>{it.species}</Card.Text>
                  <Button variant="dark" href={"/characters/" + it.id}>
                    Check him out!
                    {/* <Link to={"/characters/" + it.id}>Pepega</Link> */}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};
