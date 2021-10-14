import React, { useEffect, useState } from "react";

function CounterHooksOne() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect is Updating Document Title");
    document.title = `You Clicked ${number} times`;
  }, [number]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Click {number}
      </button>
    </div>
  );
}

export default CounterHooksOne;
