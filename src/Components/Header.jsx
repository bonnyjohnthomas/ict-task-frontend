import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <Navbar id='nav' >
        <Container>
          <Link to={"/"}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://play-lh.googleusercontent.com/Sy_9xv0fpbnc6bJgYM_DGj7-BhleftZgjbeFmvcN5eMGnoizMl2igd5IfJEq82xKZw8"
              width="30"
              height="30"
              className="d-inline-block align-top mx-1"
            />{' '}
            My Gallery
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header