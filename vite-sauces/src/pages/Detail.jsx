import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/Items/ItemListContainer";

const DetailPage = () => {
  let { id } = useParams();

  const [item, setItem] = useState([]);

  // console.log(char);

  useEffect(() => {
    axios.get("../components/JSON/db.json").then((res) =>
      setItem(res.data)
    );
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {item.id ? <ItemListContainer item={item} /> : null}
    </div>
  );
};

export default DetailPage;
