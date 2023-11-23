import { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ initialValue = 0, incrementAmount = 1 }) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + incrementAmount);
  };

  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number,
  incrementAmount: PropTypes.number
};

export default Counter;
