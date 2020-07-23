import React, { useState } from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import { useTrail, animated } from 'react-spring';
import "./Folio.css";



const items = ["Welcome to", "Samah Mustafa's", "Website"]
const config = { mass: 5, tension: 500, friction: 200 }


export const Home = () => {

    const [toggle, set] = useState(true)
    const trail = useTrail(items.length, {
      config,
      opacity: toggle ? 1 : 0,
      x: toggle ? 0 : 20,
      height: toggle ? 80 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        
            <Jumbo fluid className="jumbo" style = {{backgroundColor: "#ff5a5f", backfroundSize: "cover", height: "580px", position: "relative", margin: "0",}}>
                
                <div className="overlay" onClick={() => set(state => !state)} style = {{fontSize: "60px", fontWeight: "bold", color: "#fff", fontFamily: "Helvetica", marginTop: "70px", marginLeft: "460px", justifyContent: "left"}}>
                    {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index]}
                        className="trails-text"
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                        <animated.div style={{ height }}>{items[index]}</animated.div>
                    </animated.div>
                    ))}
                </div>
                
            </Jumbo>
        

        
    )
}


// backgroundImage: "url("+ "https://i.ibb.co/0Vb0rCb/dgvdg.jpg" + ")"



// const Styles = styled.div`
// .jumbo {
//     background-color: #ff5a5f;
//     backfround-size: cover;
//     height: 580px;
//     position: relative;
//     z-index: -2;
//     margin: 0;
// }
// `



// <Styles>
//             <Jumbo fluid className="jumbo">
//             <div className="overlay">
//             <Container>
//                 <h1 style = {{fontSize: "60px", fontWeight: "bold", color: "#fff", fontFamily: "Helvetica", marginTop: "100px", }}>
//                  Welcome to <br></br> my Website
//                 </h1>
//                 <p style = {{fontSize: "20px", 
//                 color: "#fff", 
//                 fontFamily: "Helvetica",}}>
//                 Let's take a tour together inside my world
//                 <br></br>
//                 to see how can I help you
//                 <br></br>
//                 Hold tight and stay calm,
//                 and let's get started ..
//                 </p>

//             </Container>
//             </div>
//             </Jumbo>
//         </Styles>

        // <div>
        //     <h1>Hello World</h1>
        //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        // </div>
