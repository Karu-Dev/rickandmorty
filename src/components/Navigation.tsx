import { Navbar, Nav, Form, FormControl, Button, Alert } from "react-bootstrap";
import React from "react";
export const Navigation: React.FC = () => {
  return (
    <div className="Navigation">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">PICKLE RIIIIICK</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/episodes">Episodes</Nav.Link>
          <Nav.Link href="/locations">Locations</Nav.Link>
        </Nav>
        <Alert variant="danger"style={{margin:"0 15% 0 0"}}>Imagine if you had an ad here?</Alert>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};
