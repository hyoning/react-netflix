import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, useNavigate} from "react-router-dom"; //자손들을 가져오게 하는 것!
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import '../layout/AppLayout.style.css';

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate()
  const searchByKeyword = (event) =>{
    event.preventDefault()
    // eslint-disable-next-line
    navigate(`/movies/?q=${keyword}`)
    setKeyword("");
  }
  return (
    <div className="">
      <Navbar expand="lg" className="navbar__wrap">
      <Container fluid>
        <Navbar.Brand href="/">
          <Logo className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={searchByKeyword}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Button type="submit" variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
  </div>
  )
}

export default AppLayout