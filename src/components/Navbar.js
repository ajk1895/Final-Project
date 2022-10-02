import React from "react";
import 'react-bootstrap/dist/react-bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



// need to setup router to link the pages



export default function Navi() {
    return(
        
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Character Organizer</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Faction-One">Faction 1</Nav.Link>
                    <Nav.Link href="/Faction-Two">Faction 2</Nav.Link>
                </Nav>
                </Container>
            </Navbar>                    
        
    )
}
