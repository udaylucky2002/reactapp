import React from "react";
import { tvProductsData } from "../data/tvproducts";
import { Link } from "react-router-dom";

function TVProducts() {
  return (
    <div className="maindata">
      {tvProductsData.map((tv) => {
        return (
          <div className="productsdata" key={tv.id}>
            <Link to={`/tvproducts/${tv.id}`}>
              <img src={tv.image} alt={tv.name} />
            </Link>
            <p> Brand Name : {tv.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TVProducts;
