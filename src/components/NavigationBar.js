import React from 'react';
import { Nav } from 'react-bootstrap';
// import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.nav {
    background-color: #ff5a5f;
    color: #white;
}
.navbar-brand, .navbar-nav, .nav-link {
    margin: 10px 0;
    color: #fff;
    &:hover {
        color: #fce5e6;
    }
}
`;

export const NavigationBar = () => {
    return (
        <Styles>
                <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/Folio">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
                </Nav>
        </Styles>
    )
}



// <Nav.Item>
// <Nav.Link href="/portfolio">Portfolio</Nav.Link>
// </Nav.Item>

// <Navbar expand='lg'>
//                 <Navbar.Brand href="/"></Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ml-auto">
//                         <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>

// <Navbar.Brand href="/">Code Life</Navbar.Brand>