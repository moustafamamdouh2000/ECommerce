import './Counter.css';
import { useState } from 'react';
import CounterActions from './CounterActions';
import Count from './Count';
import './Counter.css';
function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    if (counter === 99) {
      setCounter(0);
      return;
    }
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter === 0) {
      setCounter(99);
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <div className="counter">
        <Count counter={counter}></Count>
        <CounterActions increment={increment} decrement={decrement}></CounterActions>
        {counter === 99 ? (
          <p className="text-danger">counter is going to reset if you increment more</p>
        ) : null}
        {counter === 0 ? (
          <p className="text-danger">counter is going to reset if you decrement more</p>
        ) : null}
      </div>
    </div>
  );
}

export default Counter;
