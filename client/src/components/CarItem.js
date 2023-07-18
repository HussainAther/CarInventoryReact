// client/src/components/CarItem.js
import React from 'react';

const CarItem = ({ car, onDelete }) => {
  return (
    <div>
      <p>
        Make: {car.make} | Model: {car.model} | Year: {car.year} | Price: {car.price}
      </p>
      <button onClick={() => onDelete(car._id)}>Delete</button>
    </div>
  );
};

export default CarItem;

