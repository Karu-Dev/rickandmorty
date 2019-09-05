import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Carousel
} from "react-bootstrap";
import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
export const Header: React.FC = ({}) => {
  const FETCH_CHARACTERS = gql`
    query fecthCharacters($page: Int!) {
      characters(page: $page) {
        results {
          id
          name
          image
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
  }
  interface CharactersVariables {
    page: number;
  }

  const { loading, data, error } = useQuery<CharacterData, CharactersVariables>(
    FETCH_CHARACTERS,
    {
      variables: { page: Math.floor(Math.random() * 3) }
    }
  );
  const chars =
    loading || !data
      ? [{ image: "", name: "", id: 0 }]
      : data.characters.results;
  //Pulling 3 random objects from our ggl
  const char0 = chars.splice(
    Math.floor(Math.random() * chars.length),
    1
  )[0] || { image: "", name: "", id: 0 };
  const char1 = chars.splice(
    Math.floor(Math.random() * chars.length),
    1
  )[0] || { image: "", name: "", id: 0 };
  const char2 = chars.splice(
    Math.floor(Math.random() * chars.length),
    1
  )[0] || { image: "", name: "", id: 0 };

  return (
    <div className="Carousel">
      <Carousel
        style={{
          maxWidth: "15%",
          margin: "0 auto",
          textShadow: "2px 2px black"
        }}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={char0.image} alt={char0.name} />
          <Carousel.Caption>
            <Link to={"/characters/" + char0.id}>{char0.name}</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={char1.image} alt={char1.name} />

          <Carousel.Caption>
            <Link to={"/characters/" + char1.id}>{char1.name}</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={char2.image} alt={char2.name} />

          <Carousel.Caption>
            <Link to={"/characters/" + char2.id}>{char2.name}</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
