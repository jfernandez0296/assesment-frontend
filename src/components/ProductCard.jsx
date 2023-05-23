import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Generar tiempo aleatorio para habilitar o deshabilitar navegación
  const randomTime = Math.floor(Math.random() * 180) + 60; // Tiempo entre 60 y 240 segundos

  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating.rate} (Count: {product.rating.count})</p>
      <p>Remaining Time: {randomTime} seconds</p>
      <Link to={`/detalle/${product.id}`}>Go to Product Detail</Link>
    </div>
  );
};

export default ProductCard;
