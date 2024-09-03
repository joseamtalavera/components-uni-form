// AppIntro.js

import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SelectYourComponent from './components/SelectYourComponent';
import Payment from './components/Payment';
import ThankPage from './components/ThankPage';

const componentsToSell = [
    { id: 1, name: 'VertexX9 Pro CPU', image: '/VertexX9 Pro.png', features: 'CPU, 8 Cores, 16 Threads, 3.5 GHz', price: 539, type: 'cpu', amount: 0 },
    { id: 2, name: 'NeoForce GPU 3080', image: '/gpu.jpeg', features: 'GPU, 10GB GDDR6X, 1.71 GHz', price: 699, type: 'gpu', amount: 0 },
    { id: 3, name: 'Ram Extra LPX 16GB', image: 'ram.jpeg', features: '16GB (2 x 8GB), DDR4, 3200MHz', price: 89, type: 'ram', amount: 0 },
    { id: 4, name: 'Storage 970 ULTRA 1TB', image: '/SSD1TB.png', features: '1TB, NVMe M.2, 3500MB/s', price: 169, type: 'storage', amount: 0 },
    { id: 5, name: 'MTB ROG Strix Z590-E', image: '/motherboard.jpg', features: 'Motherboard 1200, ATX, WiFi 6', price: 379, type: 'motherboard', amount: 0 },
    { id: 6, name: 'Cooler Master Hyper 212', image: '/cooler.png', features: '120mm PWM Fan, 4 Heatpipes', price: 34, type: 'cooling', amount: 0 },
    { id: 7, name: 'PSU SuperTTRR 125 G5', image: 'PSU.png', features: '750W, 80+ Gold, Fully Modular', price: 129, type: 'psu', amount: 0 },
    { id: 8, name: 'Case NEXT 735J', image: '/case.png', features: 'ATX Mid Tower, Tempered Glass', price: 69, type: 'case', amount: 0 },
    { id: 9, name: 'Peripheral G Pro X', image: 'periphe.png', features: 'Mechanical, RGB, Tactile Switches', price: 129, type: 'peripheral', amount: 0 },
];

const AppIntro = () => {
    const [total, setTotal] = useState(0);
    const [components, setComponents] = useState(componentsToSell); // The componentsToSell set up the initial state of the components.
    const [clickedComponents, setclickedComponents] = useState([]);
    const [PaymentView, setPaymentView] = useState(false);
    const [ThankPageView, setThankPageView] = useState(false)
    // The tooglePaymentView function displays the payment view when the user clicks the Proceed to Payment button or the Go Back button.
    const tooglePaymentView = () => {
        setPaymentView(!PaymentView);
    };
    // The toogleThankPageView function displays the thank you page when the user clicks the Pay button.
    const toogleThankPageView = () => {
        setThankPageView(!ThankPageView);
    };
    // The handleThankPage closes the ThankPage view and takes the user to the main page.
    const handleThankPage = () => { 
        setThankPageView(false);
        setPaymentView(false);
    }
    // The goBack function takes the user back to the main page when they click from the Payment page.
    const goBack = () => {
        setPaymentView(false);
    }
    // The handleAmountChange function updates the amount of components and the total price.
    const handleAmountChange = (id, newAmount) => {
        // It creates a new array of components and updates the quantity using the map() method. ...component copies the component.
        // newAmount is the new amount of the component.
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
        // The updatedclickedComponents is as a new array with the clicked components.
        // It behaves like handleAmountChange, but it updates the clicked components.
        let updatedclickedComponents = clickedComponents.map(component => {
            if (component.id === id) {
                return {
                    ...component,
                    amount: newAmount,
                };
            }
            return component;
        });
        // This code is used to add a new clicked component if the component is not already in the clickedComponents array.
        // More than one component may be added to the clickedComponents array.
        // If there is no component that matches the given id, then we look for the component in the components array.
        if (!clickedComponents.some(component => component.id === id)) {
            const clickedComponent = components.find(component => component.id === id);
            updatedclickedComponents = [...updatedclickedComponents, { ...clickedComponent, amount: newAmount }];
        }
        // We use the filter() method to remove all components with an amount of 0.
        updatedclickedComponents = updatedclickedComponents.filter(component => component.amount > 0);
        setclickedComponents(updatedclickedComponents);
        // The reduce() method calculates the new total price for each component and accumulates it in the acc variable.
        const newTotal = updatedclickedComponents.reduce((acc, component) => {
            return acc + component.price * component.amount;
        }, 0);
        setTotal(newTotal);
    };
    // The handleComponentClick function is used to update the amount to 0 when a component is deselected.
    const handleComponentClick = (component) => {
        const isclicked = clickedComponents.some(clicked => clicked.id === component.id);
        let updatedclickedComponents;
        if (isclicked) {
            updatedclickedComponents = clickedComponents.filter(selected => selected.id !== component.id);
            const updatedComponents = components.map(comp => {
                if (comp.id === component.id) {
                    return {
                        ...comp,
                        amount: 0,
                    };
                }
                return comp;
            });
            setComponents(updatedComponents);
        } else {
            updatedclickedComponents = [...clickedComponents, { ...component, amount: 1 }];
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
        setclickedComponents(updatedclickedComponents);
        // The 0 is the initial value of the accumulator.
        // The price will be recalculated after deselecting a component.
        const newTotal = updatedclickedComponents.reduce((acc, comp) => acc + comp.price * comp.amount, 0);
        setTotal(newTotal);
    };
    // A ternary operator is used to conditionally render SelectYourComponent if PaymentView and ThankPageView are false.
    // If PaymentView is true and ThankPage is false, The PaymentView is rendered.
    // If ThankPageView is true, ThankPage is rendered.
    return (
        <div className="App">
            <div className="general-container">
            <div className="intro-container">
                <h1>New computer components on your mind?</h1>
                <h2>You've come to the right place!</h2>  
            </div>
                <div className="form-container">
                    <div className="filter-products">
                        {!PaymentView && !ThankPageView ? (
                        <SelectYourComponent
                            components={components}
                            clickedComponents={clickedComponents}
                            handleAmountChange={handleAmountChange}
                            handleComponentClick={handleComponentClick}
                            proceedToPayment={tooglePaymentView}
                        />
                        ) : PaymentView && !ThankPageView? (
                        <Payment
                            total={total}
                            toogleThankPageView={toogleThankPageView}
                            goBack={goBack}
                        />
                        ) : (
                            <ThankPage onClose={handleThankPage}/>
                        )}
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default AppIntro;