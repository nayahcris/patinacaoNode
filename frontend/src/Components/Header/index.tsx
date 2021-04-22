import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header: React.FC = () => {
    return(
        
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Patinação Artística</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Item as ={Link} className="nav-link" to ="/">Inicio</Nav.Item>
            <Nav.Item as ={Link} className="nav-link" to ="/patinadores">Patinadores</Nav.Item>
            <Nav.Item as ={Link} className="nav-link" to ="/jurados">Jurados</Nav.Item>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )

}

export default Header
