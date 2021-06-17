import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container className="nav-wrap">
        <Navbar.Brand>
          <Link to="/"className="text-secondary home-link">CA</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <div className="d-flex flex-row-reverse">
            <Nav className="text-danger float-right"> 
              <Link to="/favourites" className="text-danger"><i className="fas fa-heart"></i></Link> 
            </Nav>
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
