import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../components/ItemCount";
import { CartContext } from "../context/CartContext";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/config';

const DetailPage = () => {

    const {cart, agregarAlCarrito} = useContext(CartContext);
    console.log(cart);
    
  const [cantidad, setCantidad] = useState(1);
  const handleRestar = () => {
      cantidad > 1 && setCantidad (cantidad - 1)
  }
  const handleSumar = () => {
      setCantidad (cantidad + 1)
  }

    // setCart ( [...cart, itemAgregado]);
    //   console.log (itemAgregado);
  
  
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {

    const docRef = doc(db, 'productos', id);
    getDoc(docRef)
      .then((resp) => {
        setItem(
          {...resp.data(), id: resp.id}
        );
      })

  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {item.id ? (
        <div>
          <h1>{item.name}</h1>
          <img src={item.img} alt={item.name} width={500} />
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
          <ItemCount 
          cantidad={cantidad} 
          handleSumar={handleSumar} 
          handleRestar={handleRestar} 
          handleAgregar={() => { agregarAlCarrito (item, cantidad)}} 
          />
          <Link to="/">Volver a la página de inicio</Link>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default DetailPage;
