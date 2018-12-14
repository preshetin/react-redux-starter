import React from 'react';

const Counter = ({ onIncrement, onDecrement, count }) => {

  return (
    <div>
      <strong> {count}	</strong>
      <button className="button" onClick={onIncrement}>+</button>	
      <button className="button" onClick={onDecrement}>-</button>	
    </div>
  );
}

export default Counter;
