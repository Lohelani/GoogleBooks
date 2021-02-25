import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
//import { Link } from "react-router-dom";

function Navigation() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/search">
            <Button variant="primary">Search</Button>{' '}
            </Nav.Link>
            <Nav.Link href="/saved">
            <Button variant="primary">Saved</Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }


  export default Navigation



