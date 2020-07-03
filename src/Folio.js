import React from 'react';
// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import img from "./assets/boatImage.jpg";
// import styled from 'styled-components';
// import "./Folio.css";
// import ReactDOM from 'react-dom';
// import { useSpring, animated } from 'react-spring';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';



export const Folio = () => {

  return (
    
    
    <div className="animate__animated animate__flipInX animate__slower" style = {{ display:"flex", width: "90%", padding: "50px 30px", margin: "auto",}}>
    
    
    <div onClick={event =>  window.location.href='https://github.com/Samah-Mustafa/Movies-Project'}>
    <Card style = {{ display:"inline-block", width: "90%", textAlign: "center", padding: "10px 0", margin: "15px",}}>
    <CardActionArea style = {{padding: "20px"}}>
      <CardMedia style = {{ height: "300px", paddingTop: '0'}}
        component="img"
        alt="Contemplative Reptile"
        height="300"
        image="https://i.ibb.co/7r122DR/1.jpg"
        src="/src/assets/photo.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Watch Movies
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Website for watching movies from all over the world, with a list of the best actors and the most famous ones.
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
    </div>
  
      
      <div onClick={event =>  window.location.href='https://github.com/Samah-Mustafa/Madlibs-'}>
      <Card style = {{ display:"inline-block", width: "90%", textAlign: "center", padding: "10px 0", margin: "15px",}}>
      <CardActionArea style = {{padding: "20px"}}>
        <CardMedia style = {{ height: "300px", paddingTop: '0'}}
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://i.ibb.co/0XB1QG4/2.jpg"
          src="/src/assets/photo.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            MadLibs Game
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      </div>
    
      <div onClick={event =>  window.location.href='https://github.com/Samah-Mustafa/ShoppingList'}>
      <Card style = {{ display:"inline-block", width: "90%", textAlign: "center", padding: "10px 0", margin: "15px",}}>
      <CardActionArea style = {{padding: "20px"}}>
        <CardMedia style = {{ height: "300px", paddingTop: '0'}}
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://i.ibb.co/p47xj3H/3.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shopping List
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
    </div>
  );
}




// export const Folio = () => {

//   const [state, toggle] = useState(true)
//   const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })

// return (
  
//   <div style = {{ display:"flex", width: "90%", padding: "20px 30px", margin: "auto",}}>
  
//   <div onClick={() => toggle(!state)} >
//   <animated.div
//       style={{
//         opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
//         transform: x
//           .interpolate({
//             range: [0, 0.25, 0.35, 0.75, 1],
//             output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
//           })
//           .interpolate(x => `scale(${x})`)
//       }}>
//   <Card style = {{ display:"inline-block", width: "90%", textAlign: "center", padding: "10px 0", margin: "15px",}}>
//     <div >
//     <CardActionArea style = {{padding: "20px"}}>
//       <CardMedia style = {{ height: "300px", padding: '0'}}
//         component="img"
//         alt="Contemplative Reptile"
//         height="300"
//         image="https://i.ibb.co/mHbf8ZG/Others.jpg"
//         src="/src/assets/boatImage.jpg"
//         title="Contemplative Reptile"
//       />
//     </CardActionArea>
//     <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//           across all continents except Antarctica
//         </Typography>
//       </CardContent>
//     </div>
//     </Card>
//     </animated.div>
//     </div>
    
//     <div onClick={() => toggle(!state)} >
//     <animated.div
//       style={{
//         opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
//         transform: x
//           .interpolate({
//             range: [0, 0.25, 0.35, 0.75, 1],
//             output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
//           })
//           .interpolate(x => `scale(${x})`)
//       }}>
//     <Card style = {{ display:"inline-block", width: "90%", textAlign: "center", padding: "10px 0", margin: "15px",}}>
//     <CardActionArea style = {{padding: "20px"}}>
//       <CardMedia style = {{ height: "300px", paddingTop: '0'}}
//         component="img"
//         alt="Contemplative Reptile"
//         height="300"
//         image="https://i.ibb.co/wpjqJ8L/Vegetables.jpg"
//         src="/src/assets/photo.jpg"
//         title="Contemplative Reptile"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//           across all continents except Antarctica
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//     </Card>
//     </animated.div>
//     </div>
  
//     <div onClick={() => toggle(!state)} >
//     <animated.div
//       style={{
//         opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
//         transform: x
//           .interpolate({
//             range: [0, 0.25, 0.35, 0.75, 1],
//             output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
//           })
//           .interpolate(x => `scale(${x})`)
//       }}>
//     <Card style = {{ display:"inline-block", width: "90%", textAlign: "center", padding: "10px 0", margin: "15px",}}>
//     <CardActionArea style = {{padding: "20px"}}>
//       <CardMedia style = {{ height: "300px", paddingTop: '0'}}
//         component="img"
//         alt="Contemplative Reptile"
//         height="300"
//         image="https://i.ibb.co/PjYW59G/Sweets.jpg"
//         title="Contemplative Reptile"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//           across all continents except Antarctica
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//   </Card>
//   </animated.div>
//   </div>
  
//   </div>
// );
// }


// style = {{ display:"flex", width: "100%", padding: "20px 30px", margin: "auto",}}




// <Card style = {{ display:"flex", width: "100%", textAlign: "center", padding: "10px 0", margin: "0 auto",}}>
//       <CardActionArea style = {{padding: "20px"}}>
//         <CardMedia style = {{ height: "300px", paddingTop: '0'}}
//           component="img"
//           alt="Contemplative Reptile"
//           height="300"
//           image="https://i.ibb.co/wpjqJ8L/Vegetables.jpg"
//           src="/src/assets/photo.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//       </Card>



// <Card className={classes.root} style = {{ display:"flex", }}>
// <CardMedia style = {{ height: "300px", padding: '0'}}
// component="img"
// alt="Contemplative Reptile"
// height="300"
// image={img}
// src="/src/assets/boatImage.jpg"
// title="Contemplative Reptile"
// />
