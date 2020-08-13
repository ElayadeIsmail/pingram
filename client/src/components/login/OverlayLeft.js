import React from "react";

const OverlayLeft = ({ setPanelActive }) => {
  return (
    <div className='overlay-panel overlay-left'>
      <h1>Welcome Back!</h1>
      <p>To keep connected with us please login with your personal info</p>
      <button className='ghost' onClick={() => setPanelActive(false)}>
        Sign In
      </button>
    </div>
  );
};

export default OverlayLeft;
