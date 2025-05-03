import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={increment} style={{ margin: '10px', padding: '10px' }}>Increment</button>
        <button onClick={decrement} style={{ margin: '10px', padding: '10px' }}>Decrement</button>
        <button onClick={reset} style={{ margin: '10px', padding: '10px' }}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;
