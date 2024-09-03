// SelectYourComponent.js

import React from 'react';
// The SelectYourComponent gets its props from the AppIntro.js component.
// The {components.map(component => { ... })} generates a list of components.
// The map() method is called on components to create a list of components.
// The some() method is called to check if there is an element in the clickedComponents array that has the same id as the component.
// The handleComponetClick is used to handle the click in the component.
// The handleAmountChange is used to handle the amount change in the component.
// In the button element, The proceedToPayment sets the PaymentView to true.
const SelectYourComponent = ({ components, clickedComponents, handleComponentClick, handleAmountChange, proceedToPayment}) => {
    return (
        <div>
            <h1 className="select-text">Select your components:</h1>
            <>
                {components.map(component => {
                    const isclicked = clickedComponents.some(clicked => clicked.id === component.id);
                    return (
                        <div key={component.id} className="filter-option" onClick={(e) => {
                            if (e.target.tagName !== 'INPUT') {
                            handleComponentClick(component);
                            }
                            }}
                        >
                            <span className={`circle ${isclicked ? 'filled' : ''}`}></span>
                            <img src={component.image} alt={component.name} className='item-image' />
                            <div className="item-details">
                                <div className="item-info">
                                    <span className="item-name">{component.name}</span>
                                    <span className="item-price"> {component.price}€</span>
                                </div>
                                <div className="item-info2">
                                    <span className="item-features">{component.features}</span>
                                </div>
                                <div className="item-actions">
                                    <label>
                                        Amount:
                                        <input
                                            type="number"
                                            value={component.amount}
                                            min="0"
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleAmountChange(component.id, parseInt(e.target.value));
                                            }}
                                            disabled={!isclicked}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>    
                    );
                })}
                <button
                    className="proceed-to-payment-button"
                    onClick={proceedToPayment}
                >
                    Proceed to Payment
                </button>         
            </>    
        </div>
    );
};

export default SelectYourComponent;