import React, { useContext } from "react";
import { countProvider } from "./Parent";

function Child() {
  const value = useContext(countProvider);

  const [count, setCount] = value;
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Child;
