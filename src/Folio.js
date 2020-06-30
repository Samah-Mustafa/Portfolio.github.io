import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from "./assets/boatImage.jpg";
import styled from 'styled-components';

const Styles = styled.div`
.your-dialog-classname {
    animation-name: breath-animation;
    animation-duration: 8s;
    animation-iteration-count: infinite;
}
`;

export const Folio = () => {


  return (
    <Styles>
    <div className = "your-dialog-classname" style = {{ display:"flex", width: "100%", padding: "60px 30px", margin: "0 auto",}}>
    <Card style = {{ display:"flex", width: "85%", textAlign: "center", padding: "10px 0", margin: "0 auto",}}>
      <div>
      <CardActionArea style = {{padding: "20px"}}>
        <CardMedia style = {{ height: "300px", padding: '0'}}
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://i.ibb.co/mHbf8ZG/Others.jpg"
          src="/src/assets/boatImage.jpg"
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
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </div>

      <div>
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
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </div>
      
      <div>
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
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </div>
    </Card>
    </div>
    </Styles>

    
  );
}


// <Card className={classes.root} style = {{ display:"flex", }}>
// <CardMedia style = {{ height: "300px", padding: '0'}}
// component="img"
// alt="Contemplative Reptile"
// height="300"
// image={img}
// src="/src/assets/boatImage.jpg"
// title="Contemplative Reptile"
// />
