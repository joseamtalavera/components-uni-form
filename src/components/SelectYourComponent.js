// SelectYourComponent.js

import React from 'react';
// The SelectYourComponent receives props from the AppIntro.js component.
const SelectYourComponent = ({ components, clickedComponents, handleComponentClick, handleAmountChange, proceedToPayment}) => {
    return (
        <div>
            <h1 className="select-text">Select your components:</h1>
            <>

                {components.map(component => {
                    const clicked = clickedComponents.some(selected => selected.id === component.id);
                    return (
                        <div key={component.id} className="filter-option" onClick={(e) => {
                            if (e.target.tagName !== 'INPUT') {
                            handleComponentClick(component);
                            }
                            }}
                        >
                            <span className={`circle ${clicked ? 'filled' : ''}`}></span>
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
                                            disabled={!clicked}
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