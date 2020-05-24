import React from 'react'
import {Navbar,Nav, FormControl, Form, Button, NavDropdown} from 'react-bootstrap';
import { FaHome } from "react-icons/fa";
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';

 const NavigationBar =() => (
    
  
<Navbar bg="primary" variant="dark">
  <Navbar.Brand href="#home"><img src={logo} alt="logo" style={{width: '35px'}}/></Navbar.Brand>
    
  <Nav className="m-auto">
    <Nav.Link href="/" className="nav-link text-white text-uppercase ml-5">Home &nbsp;<FaHome /></Nav.Link>
    <Nav.Link href="/news" className="nav-link text-white text-uppercase ml-5">News</Nav.Link>
    <Nav.Link href="/contacts" className="nav-link text-white text-uppercase ml-5">Contact Us</Nav.Link>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-light">Search</Button>
  </Form>
</Navbar>
    
)

export default NavigationBar;
