import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const incrementHandler = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <h2>{value}</h2>
      <button onClick={incrementHandler}>Increment</button>

      <br />
      <br />
    </div>
  );
};

export default Counter;
