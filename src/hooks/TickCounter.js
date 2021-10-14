import React, { useState, useEffect } from "react";

function TickCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((oldCount) => oldCount + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1>Count Right Now: {count}</h1>
    </div>
  );
}

export default TickCounter;
