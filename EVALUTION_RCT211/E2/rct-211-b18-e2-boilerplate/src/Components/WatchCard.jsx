import React from "react";

const WatchCard = ({ id }) => {
  return (
    <div data-testid={`watch-card-wrapper-${id}`}>
      <div>
        <img data-testid="watch-card-image" src="" alt="" />
      </div>
      <div>
        <div data-testid="watch-name">name</div>
        <div data-testid="watch-category">category</div>
      </div>
    </div>
  );
};

export default WatchCard;
