import React from 'react';
// The ThankPage component receives the onClose function as a prop from the AppIntro.js component.
// The onClose will call the handleThankPage function in the AppIntro.js component and set ThankPageView and PaymentView to false.
const ThankPage = ({onClose}) => {
  return (
    <div className="confirmation-container">
      <h1 >Your payment has been processed</h1>
      <h1>Thank you!</h1>
      <div className="icon">
        <svg className="icon-svg" viewBox="0 0 24 24" >
          <path d="M20.285 6.708l-11.285 11.292-5.285-5.292 1.415-1.415 3.87 3.877 9.87-9.877z"/>
        </svg>
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default ThankPage;