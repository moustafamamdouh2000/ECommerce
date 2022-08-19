const CounterActions = ({ increment, decrement }) => {
  return (
    <div>
      <button className="btn btn-primary btn-lg d-block mx-auto my-5" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-primary btn-lg d-block mx-auto my-5" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default CounterActions;
