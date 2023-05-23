
import ProductCard from "../components/ProductCard"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.storerestapi.com/products')
      .then((response) => {
        const responseData = response.data;
        if (Array.isArray(responseData)) {
          setProducts(responseData);
        } else if (Array.isArray(responseData.products)) {
          setProducts(responseData.products);
        } else {
          console.error('Invalid response format:', responseData);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
