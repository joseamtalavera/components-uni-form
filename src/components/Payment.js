// Payment.js

import React, {useState} from 'react';
// The Payment component gets its props from the AppIntro.js component.
const Payment = ({ total, toogleThankPageView, goBack }) => {
  const initialDetails = {
    name: '',
    address: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };
  // The details state variable is used to store the details of the payment user.
  const [details, setDetails] = useState(initialDetails);
  // The handleChange function is used to update the details state variable.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  // The handleSubmit calls preventDefault() on e to prevent the page from reloading.
  // The toogleThankPageView function is called to display the thank you page.
  const handleSubmit = (e) => {
    e.preventDefault();
    toogleThankPageView();
  };

  return (
    <div className="container">
      <button className="back-button" onClick={goBack}>
        <svg className="back-icon" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
        Back
      </button>
      <h3 className="total-price">Total Price: {total}€</h3>
      <h3>Enter your payment details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={details.name}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Delivery Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={details.address}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={details.email}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={details.cardNumber}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            value={details.expiryDate}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={details.cvv}
            onChange={handleChange}
            required />
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button">Pay</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;