import React, { useState } from "react";
import "./ChangeVisibility.css";

function ChangeVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibility() {
    setIsVisible((visible) =>!isVisible);
  };

  return (
    <div className="toggle-text">
      <div>
        {isVisible && <p>Text is visible!</p>}
      </div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
    </div>
  );
}

export default ChangeVisibility;
