import React, { useState } from "react";

function Uscomponent() {
  const [count, setCount] = useState(0);

  function changeCount(amount) {
    setCount((prevCount) => prevCount + amount);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <>
      <button className="mr-2" onClick={() => changeCount(1)}>
        +
      </button>
      <span>{count}</span>
      <button className="ml-2" onClick={() => changeCount(-1)}>
        -
      </button>
      <button onClick={() => resetCount()}>Reset</button>
    </>
  );
}
export default Uscomponent;
