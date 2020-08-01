import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




export const Works = () => {

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
          Website for watching movies from all over the world, with a list of the best actors and the most famous ones.<br/>
          Don't take a look
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



