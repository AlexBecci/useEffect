import React, { useState, useEffect } from "react";

const ResizeApp = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth < 768;
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("return useEffect");
      window.removeEventListener("rezise", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>{windowWidth}</h1>
      {isMobile && <h2>Show only mobile device</h2>}
    </div>
  );
};

export default ResizeApp;
