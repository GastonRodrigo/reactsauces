import { useState, useEffect } from "react";
import axios from "axios";
import ItemListContainer from "./ItemListContainer";

import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios('/src/components/JSON/db.json').then((res) =>
      setItems(res.data.results)
    );
  }, []);

  return (
    <div className="Cards-List">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <ItemListContainer item={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailContainer;