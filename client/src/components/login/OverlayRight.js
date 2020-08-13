import React from "react";

const OverlayRight = ({ setPanelActive }) => {
  return (
    <div className='overlay-panel overlay-right'>
      <h1>Hello, Friend!</h1>
      <p>Enter your personal details and start journey with us</p>
      <button className='ghost' onClick={() => setPanelActive(true)}>
        Sign Up
      </button>
    </div>
  );
};

export default OverlayRight;
