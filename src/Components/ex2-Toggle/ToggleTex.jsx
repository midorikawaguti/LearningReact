import React, { useState } from "react";
import "./ToggleText.css";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
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

export default ToggleText;
