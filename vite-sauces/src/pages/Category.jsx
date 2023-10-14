import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ItemListContainer from "../components/Items/ItemListContainer";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";


const Category = () => {
  const [products, setProducts] = useState([]);
  let { category } = useParams();
  console.log(category);

  useEffect(() => {
    axios.get('/src/components/JSON/db.json').then((response) => {
        console.log('Datos del JSON:', response.data);
        setProducts(response.data.productos);
      })
  }, [category]); //category

  let filteredProducts = products.filter((products) => {
    return products.category === category;
});
  return (
    <div>
      <h1>{category}</h1>
      <Box
        sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: '10px',
        my: 2,
      }}
    >
      
      <Grid container spacing={0} justifyContent="center">
      
      {filteredProducts.map((products) => {
        return (
          <div style={{ margin: 10 }} key={products.id}>
            <ItemListContainer
                  name={products.name}
                  img={products.img}
                  description={products.description}
                  price={products.price}
                />
          </div>
        );
      })}
    
    </Grid>
    </Box>
    </div>
  );
}

export default Category;


