import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // Simulación de tiempo random para habilitar o deshabilitar navegación
  const [timeRemaining, setTimeRemaining] = useState(180); // 3 minutos en segundos

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const navigateToDetail = () => {
    if (timeRemaining > 0) {
      // Navegar al detalle del producto
      console.log(`Navigating to Product Detail - ID: ${id}`);
    }
  };

  return (
    <div>
      <h1>Product Detail Page</h1>
      <h2>Product ID: {id}</h2>
      <p>Time Remaining: {timeRemaining} seconds</p>
      <button onClick={navigateToDetail}>Go to Product Detail</button>
    </div>
  );
};

export default ProductDetail;
