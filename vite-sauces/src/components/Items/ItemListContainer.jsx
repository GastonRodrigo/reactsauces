import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';

const ItemListContainer = ({ id, name, img, category, description, price }) => {
  const [products, setProductos] = useState([]);


  

  useEffect(() => {
    // // Simulando una solicitud a una API
    // axios.get('/src/components/JSON/db.json').then((res) => {
    //   const product = res.data.productos.find((product) => product.name === name);
    //   if (product) {
    //     setProductId(product.id);
    //   }
    // });

    const productosRef = collection (db, 'productos');
    getDocs(productosRef)
    .then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return {...doc.data(), id: doc.id}
        })
      )
    })

  }, [id]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Link to={`/detail/${id}`}>
        <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardMedia component="img" height="300" image={img} />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
            <Typography variant="h5" color="textSecondary">
              {price}
            </Typography>
          </CardContent>
          <Button className="addToCartButton">
            Ver mas
          </Button>
        </Card>
      </Link>
    </Box>
  );
};

export default ItemListContainer;
