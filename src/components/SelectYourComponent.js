// SelectYourComponent.js

import React from 'react';

const SelectComponent = ({ isTypeOpen, toggleTypeOpen, components, selectedType, selectedComponents, handleComponentSelect, handleTypeClick, handleAmountChange }) => {
  return (
    <div>
      <div className={`filter-group ${isTypeOpen ? 'open' : ''} orange-color`}>
        <label htmlFor="type" onClick={toggleTypeOpen}>Select your component</label>
      </div>
      {isTypeOpen && (
        <>
          {components.map(component => {
            const isSelected = selectedComponents.some(selected => selected.id === component.id);
            return (
                <div key={component.id} className="filter-option" onClick={(e) => {
                    if (e.target.tagName !== 'INPUT') {
                      handleComponentSelect(component);
                    }
                  }}>
                <span className={`circle ${isSelected ? 'filled' : ''}`}></span>
                <img src={component.image} alt={component.name} className='item-image' />
                <div className="item-details">
                  <div className="item-info">
                    <span className="item-name">{component.name}</span>
                    <span className="item-price"> {component.price}</span>
                  </div>
                  <div className="item-info2">
                    <span className="item-features">({component.features})</span>
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
                        disabled={!isSelected}
                      />
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default SelectComponent;