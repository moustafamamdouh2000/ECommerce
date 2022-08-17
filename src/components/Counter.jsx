import { useState } from 'react';
import './Counter.css';
function Counter(props) {
  return <div className="counter">current count is :{props.counter}</div>;
}

export default Counter;
