import React from 'react';

const Counter = ({ onIncrement, onDecrement, count }) => {

  return (
    <div>
      <strong> {count}	</strong>
      <button onClick={onIncrement}>+</button>	
      <button onClick={onDecrement}>-</button>	
    </div>
  );
}

export default Counter;
