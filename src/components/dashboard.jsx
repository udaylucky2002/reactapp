import React from "react";
import Sidenav from "./sidenav";
import { Col, Row } from "react-bootstrap";
import { productsData } from "../data/products";
import { tvProductsData } from "../data/tvproducts";
import { Link } from "react-router-dom";

function Dashboard() {
  const NewEarbudsData = productsData.slice(0, 3);
  const NewTVData = tvProductsData.slice(0, 3);

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} style={{ padding: "5%" }}>
          {/* Combined Section for Earbuds and TV Products */}
          <div className="dash maindata">
            {/* Earbuds Products */}
            {NewEarbudsData.map((e) => {
              return (
                <div className="productdata" key={e.id} style={{ marginBottom: "20px" }}>
                  <img src={e.image} alt={e.name} />
                  <p>{e.name}</p>
                  <p>{e.Price}</p>
                </div>
              );
            })}

            {/* View More Earbuds Button */}
            <div style={{ textAlign: "right", marginTop: "20px", clear: "both" }}>
              <Link to="/earbuds">
                <button style={{ padding: "1%" }}>View More </button>
              </Link>
            </div>

     

            {NewTVData.map((tv) => {
              return (
                <div className="productdata" key={tv.id} style={{ marginBottom: "20px" }}>
                  <img src={tv.image} alt={tv.name} />
                  <p>{tv.name}</p>
                  <p>{tv.Price}</p>
                </div>
              );
            })}

            <div style={{ textAlign: "right", marginTop: "20px", clear: "both" }}>
              <Link to="/tvproducts">
                <button style={{ padding: "1%" }}>View More</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
