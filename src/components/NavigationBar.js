import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.nav {
    background-color: #;
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
                <Nav.Link href="/Works">Works</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
                </Nav>
        </Styles>
    )
}




// <Nav className="justify-content-center" activeKey="/home">
//                 <Nav.Item>
//                 <Nav.Link href="/">Home</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                 <Nav.Link href="/about">About</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                 <Nav.Link href="/Works">Works</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                 <Nav.Link href="/contact">Contact</Nav.Link>
//                 </Nav.Item>
//                 </Nav>