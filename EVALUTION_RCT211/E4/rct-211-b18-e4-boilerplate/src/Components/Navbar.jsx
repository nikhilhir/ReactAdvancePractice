import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>Product Dashboard</div>
      <div>
        {/* Link the button to the /add route, when the user clicks on the button */}
        <button data-cy="add-product-navbar-button">Add Product</button>
      </div>
    </div>
  );
};

export default Navbar;
