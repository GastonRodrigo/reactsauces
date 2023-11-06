import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from "../components/Items/ItemListContainer";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/config'

const Category = () => {
  const [products, setProductos] = useState([]);
  let { category } = useParams();

  useEffect(() => {
    const productosRef = collection (db, 'productos');
  getDocs(productosRef)
  .then((resp) => {
    setProductos(
      resp.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
      })
    )
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
        console.log(products.id);
        return (
          <div style={{ margin: 10 }} key={products.id}>
            <ItemListContainer
                  id={products.id}
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


