import React from 'react';

const ProductDetail = ({ match }) => {
  const productId = match.params.id;

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Product ID: {productId}</p>
      <p>Product information goes here...</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default ProductDetail;
