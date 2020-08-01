import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export const Folio = () => {
  return (
    <div
      className="animate__animated animate__flipInX animate__slower"
      style={{
        display: "flex",
        width: "90%",
        padding: "50px 30px",
        margin: "auto",
      }}
    >
      <div
        onClick={(event) =>
          (window.location.href =
            "https://github.com/Samah-Mustafa/Movies-Project")
        }
      >
        <Card
          style={{
            display: "inline-block",
            width: "90%",
            textAlign: "center",
            padding: "10px 0",
            margin: "15px",
          }}
        >
          <CardActionArea style={{ padding: "20px" }}>
            <CardMedia
              style={{ height: "300px", paddingTop: "0" }}
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
                Website for watching movies from all over the world, with a list
                of the best actors and the most famous ones.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div
        onClick={(event) =>
          (window.location.href = "https://github.com/Samah-Mustafa/Madlibs-")
        }
      >
        <Card
          style={{
            display: "inline-block",
            width: "90%",
            textAlign: "center",
            padding: "10px 0",
            margin: "15px",
          }}
        >
          <CardActionArea style={{ padding: "20px" }}>
            <CardMedia
              style={{ height: "300px", paddingTop: "0" }}
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
                Madlibs is a game where we can play with our friends using words
                to create a funny new sentences.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div
        onClick={(event) =>
          (window.location.href =
            "https://github.com/Samah-Mustafa/ShoppingList")
        }
      >
        <Card
          style={{
            display: "inline-block",
            width: "90%",
            textAlign: "center",
            padding: "10px 0",
            margin: "15px",
          }}
        >
          <CardActionArea style={{ padding: "20px" }}>
            <CardMedia
              style={{ height: "300px", paddingTop: "0" }}
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
                Torelloo is a website where we can arrange our shopping lists
                along the week or the month.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};
