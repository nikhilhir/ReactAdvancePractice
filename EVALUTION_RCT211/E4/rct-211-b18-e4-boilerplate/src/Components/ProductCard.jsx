import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div data-cy={`product-card-${item.id}`}>
      <div data-cy="product-card-name">name</div>
      <div data-cy="product-card-category">category</div>
      <div>
        <img data-cy="product-card-image" src={``} alt="Product" />
      </div>
      <div data-cy="product-card-price">€ price</div>
      <div>
        {/* Add a onClick handler for delete functionality */}
        <button data-cy="delete-button">Delete Product</button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}
        <button data-cy="edit-button">Edit Product</button>
      </div>
    </div>
  );
};

export default ProductCard;
