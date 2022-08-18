import React from "react";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
