// AppIntro.js

import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SelectYourComponent from './components/SelectYourComponent';
import Payment from './components/Payment';

const componentsData = [
    { id: 1, name: 'VertexX9 Pro CPU', image: '/VertexX9 Pro.png', features: 'CPU, 8 Cores, 16 Threads, 3.5 GHz', price: 539, type: 'cpu', amount: 0 },
    { id: 2, name: 'NeoForce GPU 3080', image: '/gpu.jpeg', features: 'GPU, 10GB GDDR6X, 1.71 GHz', price: 699, type: 'gpu', amount: 0 },
    { id: 3, name: 'Ram Extra LPX 16GB', image: 'ram.jpeg', features: '16GB (2 x 8GB), DDR4, 3200MHz', price: 89, type: 'ram', amount: 0 },
    { id: 4, name: 'Storage 970 ULTRA 1TB', image: '/SSD1TB.png', features: '1TB, NVMe M.2, 3500MB/s', price: 169, type: 'storage', amount: 0 },
    { id: 5, name: 'MTB ROG Strix Z590-E', image: '/motherboard.jpg', features: 'Motherboard 1200, ATX, WiFi 6', price: 379, type: 'motherboard', amount: 0 },
    { id: 6, name: 'Cooler Master Hyper 212', image: '/cooler.png', features: '120mm PWM Fan, 4 Heatpipes', price: 34, type: 'cooling', amount: 0 },
    { id: 7, name: 'PSU SuperTTRR 125 G5', image: 'PSU.png', features: '750W, 80+ Gold, Fully Modular', price: 129, type: 'psu', amount: 0 },
    { id: 8, name: 'Case NEXT 735J', image: '/case.png', features: 'ATX Mid Tower, Tempered Glass', price: 69, type: 'case', amount: 0 },
    { id: 9, name:'Peripheral G Pro X', image: 'periphe.png', features: 'Mechanical, RGB, Tactile Switches', price: 129, type: 'peripheral', amount: 0 },
];

const AppIntro = () => {
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [selectedType, setSelectedType] = useState('all');
    const [total, setTotal] = useState(0);
    const [components, setComponents] = useState(componentsData);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [selectedComponents, setSelectedComponents] = useState([]);
   
    const toggleTypeOpen = () => {
        setIsTypeOpen(!isTypeOpen);
        setIsPaymentOpen(false);
    };

    const togglePaymentOpen = () => {
        setIsPaymentOpen(!isPaymentOpen);
        setIsTypeOpen(false);
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    const handleAmountChange = (id, newAmount) => {
        const updatedComponents = components.map(component => {
            if (component.id === id) {
                return {
                    ...component,
                    amount: newAmount,
                };
            }
            return component;
        });
        setComponents(updatedComponents);

        
        let updatedSelectedComponents = selectedComponents.map(component => {
            if (component.id === id) {
                return {
                    ...component,
                    amount: newAmount,
                };
            }
            return component;
        });

        if (!selectedComponents.some(component => component.id === id)) {
            const selectedComponent = components.find(component => component.id === id);
            updatedSelectedComponents = [...updatedSelectedComponents, { ...selectedComponent, amount: newAmount }];
        }

        updatedSelectedComponents = updatedSelectedComponents.filter(component => component.amount > 0);
        setSelectedComponents(updatedSelectedComponents);

        const newTotal = updatedSelectedComponents.reduce((acc, component) => {
            return acc + component.price * component.amount;
        }, 0);
        setTotal(newTotal);
    };

    const handleComponentSelect = (component) => {
        const isSelected = selectedComponents.some(selected => selected.id === component.id);
        let updatedSelectedComponents;
        if (isSelected) {
            
            updatedSelectedComponents = selectedComponents.filter(selected => selected.id !== component.id);
            const updatedComponents = components.map(comp => {
                if (comp.id === component.id) {
                    return {
                        ...comp,
                        amount: component.amount || 1,
                    };
                }
                return comp;
            });
            setComponents(updatedComponents);
        } else {
            
            updatedSelectedComponents = [...selectedComponents, { ...component, amount: 1 }];
            const updatedComponents = components.map(comp => {
                if (comp.id === component.id) {
                    return {
                        ...comp,
                        amount: 1,
                    };
                }
                return comp;
            });
            setComponents(updatedComponents);
        }
        setSelectedComponents(updatedSelectedComponents);
        setSelectedType(component.type);

        const newTotal = updatedSelectedComponents.reduce((acc, comp) => acc + comp.price * comp.amount, 0);
        setTotal(newTotal);
    };

    const resetAmounts = () => {
        const resetSelectedComponents = selectedComponents.map(comp => ({ ...comp, amount: 0 }));
        const resetComponents = components.map(comp => ({ ...comp, amount: 0 }));
        setSelectedComponents(resetSelectedComponents);
        setComponents(resetComponents);
        setTotal(0);
    };

    return (
        <div className="App">
            <div className="form-image-container">
               
                <div className="header-contatiner">
                <h1>New computer components on your mind?</h1>
                <h2>You've come to the right place!</h2>
                </div>
                <div className="form-container">
                    <div className="filter-products">
                       
                       {/*  <h2>Best Computer Components</h2> */}
                        <SelectYourComponent
                            isTypeOpen={isTypeOpen}
                            toggleTypeOpen={toggleTypeOpen}
                            components={components}
                            selectedType={selectedType}
                            selectedComponents={selectedComponents}
                            handleTypeClick={handleTypeClick}
                            handleAmountChange={handleAmountChange}
                            handleComponentSelect={handleComponentSelect}
                        />
                        <Payment 
                            total={total} 
                            isPaymentOpen={isPaymentOpen} 
                            togglePaymentOpen={togglePaymentOpen}
                            toggleTypeOpen={toggleTypeOpen}
                            resetAmounts={resetAmounts}
                        />
                    </div>
                </div>
                <div className="image-container"></div>
            </div>
        </div>
    );
};

export default AppIntro;