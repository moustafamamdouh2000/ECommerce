import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';
import CounterActions from './CounterActions';
import Count from './Count';
import './Counter.css';
import { incrementCounter, decrementCounter } from '../../redux/counterSlice';
function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);
  const increment = () => {
    dispatch(incrementCounter(1));
  };
  const decrement = () => {
    dispatch(decrementCounter(1));
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
