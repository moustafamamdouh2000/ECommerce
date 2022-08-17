import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
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
      <Counter counter={counter}></Counter>
      <button className="btn btn-primary btn-lg d-block mx-auto my-5" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-primary btn-lg d-block mx-auto my-5" onClick={decrement}>
        Decrement
      </button>
      {counter === 99 ? (
        <p className="text-danger">counter is going to reset if you increment more</p>
      ) : null}
      {counter === 0 ? (
        <p className="text-danger">counter is going to reset if you decrement more</p>
      ) : null}
    </div>
  );
}

export default App;
