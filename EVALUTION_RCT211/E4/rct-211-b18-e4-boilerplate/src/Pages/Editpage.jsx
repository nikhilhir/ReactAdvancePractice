import React from "react";

const Editpage = () => {
  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input data-cy="edit-product-title" type="text" />
      </div>
      <div>
        <label>Product Price</label>
        <input data-cy="edit-product-price" type="number" />
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button data-cy="update-button">Update</button>
      </div>
    </div>
  );
};

export default Editpage;
