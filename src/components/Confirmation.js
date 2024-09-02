import React from 'react';

const Confirmation = ({onClose}) => {
  return (
    <div className="confirmation-container">
      <h1 >Your payment has been processed</h1>
      <h1>Thank you!</h1>
      <div className="icon">
        {/* This is an SVG icon */}
        <svg className="icon-svg" viewBox="0 0 24 24" >
          <path d="M20.285 6.708l-11.285 11.292-5.285-5.292 1.415-1.415 3.87 3.877 9.87-9.877z"/>
        </svg>
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default Confirmation;