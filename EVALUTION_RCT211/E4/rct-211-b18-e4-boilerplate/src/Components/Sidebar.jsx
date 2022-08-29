import React from "react";

const Sidebar = () => {
  return (
    <div style={{ minWidth: "250px" }}>
      <h3>Sort By</h3>
      <div>
        <div>
          <input type="radio" data-cy="asc" value="asc" />
          <label>Ascending</label>
        </div>
        <div>
          <input type="radio" data-cy="desc" value="desc" />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
