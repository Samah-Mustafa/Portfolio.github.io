import React from 'react';
import './Folio.css';
import image01 from "./assets/Behance.png";
import image02 from "./assets/LinkedIn.png";



export const About = () => {
    return (  
      <div style={{width: "750px", margin: "auto", marginTop: "90px", fontSize: "20px", textAlign: "justify", }}>
          <p>Hi my name is <b>Samah Mustafa</b>. I'm a graduate from Faculty of Art and Design (field of specialization: Graphic Design and Advertising).
          I’m passionate about creating and producing high-quality work, dedicated to create designs that attract the eye.
          I found it interested to generate new ideas to get as close as possible to the target.
          One of my favourite challenges is to draft ideas that fit the brief or help bringing a creative angle if the client doesn’t entirely know what he’s after till I make sure that work is done.</p>
          <p><b>You can check my portfolios on: </b></p>

          <div style = {{ display:"inline-block", width: "100%", textAlign: "center", padding: "10px 0", marginLeft: "-250px",}}>
          <img src={image01} alt="Behance" style = {{height: "60px"}} onClick={event =>  window.location.href='https://www.behance.net/samahmustafa'}/>
          <img src={image02} alt="LinkedIn" style = {{height: "60px"}} onClick={event =>  window.location.href='https://www.linkedin.com/in/samah-m-79a293195/'}/>
          </div>
      </div>
    )
}
