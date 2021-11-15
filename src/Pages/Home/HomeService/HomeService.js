import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../../Shared/Product/Product";

const HomeService = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const showProducts = products.slice(0, 6);

  return (
    <Container>
      <h1 className="text-center fw-bold my-5 text-danger">Our Products</h1>
      <Row>
        {showProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default HomeService;
