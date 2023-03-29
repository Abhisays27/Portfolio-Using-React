import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { useEffect } from "react";

const Navbarr = () => {
  const [Activelink,setActivelink] = useState('home');
  const [Scrolled, setScrolled] = useState(false)

  useEffect(() => {
   const onScroll = ()=> {
    if (window.scrollY> 50){

      setScrolled(true);
    }
    else{
      setScrolled(false)
    }
window.addEventListener("scroll",onScroll);
return ()=> window.removeEventListener("scroll",onScroll)
   }
  }, [])
  
  return (
    <div>
      <Navbar bg="light" className={Scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home"><img src={''} alt="logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Skills">Skills</Nav.Link>
              <Nav.Link href="#Project">Project</Nav.Link>
              
              
            </Nav>
            <span className="navbar-text">
              <div className="social-icons">
                <a href=""><img src="" alt="" srcset="" /></a>
                <a href=""><img src="" alt="" srcset="" /></a>
                <a href=""><img src="" alt="" srcset="" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
