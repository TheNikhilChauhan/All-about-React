import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Resize = () => {
  const [widht, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    //cleanup
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <div>
      <h2>The widht of screen is {widht}px</h2>
    </div>
  );
};

export default Resize;
