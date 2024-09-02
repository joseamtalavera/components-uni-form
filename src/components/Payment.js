import React, {useState} from 'react';


const Payment = ({ 
  total, 
  togglePaymentOpen, 
  toggleTypeOpen, 
  resetAmounts, 
  toggleConfirmationVisible,
  goBack }) => {
  const initialFormData = {
    name: '',
    address: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };

  const initialView = 'payment';
  const initialIsModalOpen = false;
  const [view, setView] = useState(initialView);
  const [isModalOpen, setIsModalOpen] = useState(initialIsModalOpen);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleConfirmationVisible();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setView('payment');
    setFormData(initialFormData);
    togglePaymentOpen();
    toggleTypeOpen();
    resetAmounts();
  }

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
            value={formData.name}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
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