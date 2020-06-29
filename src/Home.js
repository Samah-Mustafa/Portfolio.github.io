import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.jumbo {
    background-color: #ff5a5f;
    backfround-size: cover;
    height: 580px;
    position: relative;
    z-index: -2;
    margin: 0;
}
`

export const Home = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1 style = {{fontSize: "60px", 
                              fontWeight: "bold", 
                              color: "#fff", 
                              fontFamily: "Helvetica",
                              marginTop: "100px", }}>
                 Welcome to <br></br> my Website
                </h1>
                <p style = {{fontSize: "20px", 
                color: "#fff", 
                fontFamily: "Helvetica",}}>
                Let's take a tour together inside my world
                <br></br>
                to see how can I help you
                <br></br>
                Hold tight and stay calm,
                and let's get started ..
                </p>

            </Container>
            </Jumbo>
        </Styles>
    )
}


        // <div>
        //     <h1>Hello World</h1>
        //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        // </div>
