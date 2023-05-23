import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [remainingTime, setRemainingTime] = useState(product.remainingTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Remaining Time: {remainingTime}s</p>
      {remainingTime > 0 ? (
        <Link to={`/detalle/${product.id}`}>Ver detalle</Link>
      ) : (
        <p>Time expired</p>
      )}
    </div>
  );
};

export default ProductCard;
