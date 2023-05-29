import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('url-de-la-api');
      const data = await response.json();
      setProducts(data.data); // Actualiza la variable products con el arreglo de productos
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
          <p>Category: {product.category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
