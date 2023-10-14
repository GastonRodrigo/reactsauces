import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get('/src/components/JSON/db.json').then((res) => {
      const product = res.data.productos.find((product) => product.id === parseInt(id));
      setItem(product || {});
    });
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {item.id ? (
        <div>
          <h1>{item.name}</h1>
          <img src={item.img} alt={item.name} />
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default DetailPage;
