import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/src/components/JSON/db.json').then((res) => {
      setItems(res.data.productos);
    });
  }, []);

  return (
    <div className="Cards-List">
      {items.map((item) => (
        <div key={item.id}>
          <Link to={`/detail/${item.id}`}>
            <div>
              <h2>{item.name}</h2>
              <img src={item.img} alt={item.name} />
              <p>Description: {item.description}</p>
              <p>Price: {item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemDetailContainer;
