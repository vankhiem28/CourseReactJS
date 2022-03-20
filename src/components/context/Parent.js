import React, { createContext, useState } from "react";
import Child from "./Child";

export const countProvider = createContext();

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <countProvider.Provider value={[count, setCount]}>
      <Child />
    </countProvider.Provider>
  );
}

export default Parent;
