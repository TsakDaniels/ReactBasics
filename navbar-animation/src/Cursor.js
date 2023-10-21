import React, { useState, useEffect } from "react";
import "./index.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add event listeners to track the mouse cursor position
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="glowing-cursor" style={{ left: position.x, top: position.y, right: position.x, bottom: position.y}}></div>;
};

export default Cursor;