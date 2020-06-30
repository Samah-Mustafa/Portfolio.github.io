import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import img from "./assets/boatImage.jpg";
// import styled from 'styled-components';
import "./Folio.css";


// const Styles = styled.div`

// }
// `;

export const Folio = () => {


  return (
    
    <div  ClassName ="container" style = {{ display:"flex", width: "90%", padding: "60px 30px", margin: "auto",}}>
    <Card ClassName ="card" style = {{ display:"flex", width: "100%", textAlign: "center", padding: "10px 0", margin: "15px",}}>
      <div ClassName ="content">
      <CardActionArea ClassName="logo" style = {{padding: "20px"}}>
        <CardMedia  style = {{ height: "300px", padding: '0'}}
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://i.ibb.co/mHbf8ZG/Others.jpg"
          src="/src/assets/boatImage.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent ClassName="hover_content">
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </div>
      </Card>

      
      
      <Card style = {{ display:"flex", width: "100%", textAlign: "center", padding: "10px 0", margin: "15px",}}>
      <CardActionArea style = {{padding: "20px"}}>
        <CardMedia style = {{ height: "300px", paddingTop: '0'}}
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://i.ibb.co/wpjqJ8L/Vegetables.jpg"
          src="/src/assets/photo.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      
    
      
      <Card style = {{ display:"flex", width: "100%", textAlign: "center", padding: "10px 0", margin: "15px",}}>
      <CardActionArea style = {{padding: "20px"}}>
        <CardMedia style = {{ height: "300px", paddingTop: '0'}}
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://i.ibb.co/PjYW59G/Sweets.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    

  );
}





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
