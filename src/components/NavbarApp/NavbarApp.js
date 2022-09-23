import React from 'react'
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';
import './NavbarApp.css';

const NavbarApp = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav>
            <Nav.Link><Link className='navlink' to='/characters'>Characters</Link></Nav.Link>
            <Nav.Link><Link className='navlink' to='/locations'>Locations</Link></Nav.Link>
            <Nav.Link><Link className='navlink' to='/episodes'>Episodes</Link></Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default NavbarApp