# Getting Started with Create React App

## Project Description

This project consists of an order form for computer parts showcasing nine products, developed in React and styled using CSS. To avoid the need to leave the initial page, and also to ensure that the form is capable of providing a simple and easy process for the user experience, I have used ternary functions to render the different views in the ordering process.

The order process starts by clicking on the select circle button of the desired product. I implemented the quantity function, which allows the user to change the number of items. Once the Proceed to Payment button is clicked, a payment page is toggled to ensure the user always stays on the initial page. Once the payment details have been completed and the Pay button has been clicked, a thank you page toggles back. The components in use are `AppIntro.js`, `SelectYourComponent.js`, `Payment.js`, and `ThankPage.js`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
