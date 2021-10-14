import React, { useState, useEffect } from "react";

function MouseHook() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("Mouse Hover", logMousePosition);
  }, []);
  return (
    <div>
      Mouse Co-ordinates X-{x}, Y-{y}
    </div>
  );
}

export default MouseHook;
