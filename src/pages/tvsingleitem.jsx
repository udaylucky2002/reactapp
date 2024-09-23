import React from "react";
import { productsData } from "../data/tvproducts";
import { useParams } from "react-router-dom";

function SingleItem() {
  let { id } = useParams();
  let userId = productsData.find((tv) => tv.id === id);

  return (
    <div>
      <img src={userId.image} alt="" />
      <p>{userId.id}</p>
      <p>{userId.name}</p>
      <p>{userId.Price}</p>
    </div>
  );
}

export default SingleItem;

