import React, { useState, useEffect } from "react";
const CursorDrag = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      style={{
        height: "4rem",
        width: "4rem",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: "black",
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%,-50%)",
      }}
    ></div>
  );
};
export default CursorDrag;
