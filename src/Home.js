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


