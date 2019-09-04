import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Body } from "./components/body";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Character } from "./components/character";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo";
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <ApolloProvider client={client}>
          <Header></Header>
          <Route path="/" exact component={Body} />
          <Route path="/characters/:id" exact component={Character} />
          <Footer></Footer>
        </ApolloProvider>
      </Router>
    </div>
  );
};

export default App;
