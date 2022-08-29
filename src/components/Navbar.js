 import React  from "react";
 import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'



 function Navbarcomp(){

 return(
  <div>
      <Navbar collapseOnSelect expand="lg"className="nav" bg="purple" >
      <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#About us">About us</Nav.Link>
      <Nav.Link href="#Facilities">Facilities</Nav.Link>
      <Nav.Link href="#Contact us">Contact us</Nav.Link>
      <Nav.Link href="#Log in">Log in</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">rooms</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">
      Reservation
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Food</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">
      Separated link
      </NavDropdown.Item>
      </NavDropdown>
      </Nav>
      <Nav>
              
      </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
      
     
     
     
  );
}





 
export default Navbarcomp;


