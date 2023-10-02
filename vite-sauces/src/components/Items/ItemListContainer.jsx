import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

const ItemListContainer = ({name, img, description, price}) => {
  const [cart, setCart] = useState([]); // Estado del carrito

  // Función para agregar un item al carrito
  const addToCart = () => {
    // Crea un nuevo objeto de item 
    const newItem = {
      name: name,
      img: img,
      description: description,
      price: price,
    };

    // Agrega el nuevo item al carrito
    setCart([...cart, newItem]);
  };
  return (
    <Box sx={{flexGrow: 1}}>
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={img}
            alt="karnevil"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            <Typography variant='h5' color="text.secondary">
              {price}
            </Typography>
          </CardContent>
          <button className="addToCartButton" onClick={addToCart}>Agregar al carrito</button>
        </CardActionArea>
      </Card>
      
    </Box>
  );
};

export default ItemListContainer;