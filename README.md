# Introduction

Touch Type Trainer is a work-in-progress app to help users improve their typing skills.

The user journey should be as follows: 
1. A user reads some basic touch typing instructions.
2. They select a text topic and the quantity typing they want to do during that visit.
3. A quotation is then displayed on screen which the user should type, with visual feedback helping them monitor their progress as they type the text. I.e. the character they should type next will be highlighted. 
4. Further quotes are presented, with the number determined by the quantity of typing the user chose.  
5. Once all quotes have been typed, the user is presented with their results, showing them their error rate for each character.
6. The user is then invited to undertake training, which consists of more text to type, but this text is auto-generated based on the user's error profile.

# Project status
The project is at an early stage. Thus far, the first three steps listed above have been implemented. Imediate next stages in the build are as follows:
1. Retreive quotes from open APIs (to replace the hard-coded quotes presently used).
2. Ensure error logging happens: make an object with a key for each typeable character, and an array as the property with the first item logging number of correct key presses and the second item loggin incorrect key presses  - start with alpha characters incase other characters cause issues when used as keys withinJS objects.
3. Ensure the keyStrokes logging object persists correctly between quotes, and gets passed correctly when all quotes are complete. 
4. Implement the functionality to populate the Stats page. Perhaps the user should see a bar graph of error rate, from highests error rate on left to lowest on right.)Also display: general accuracy percentage; words per minute; state target letters for next exercise; button to move onto the training exercise.
5. Think about how to implement a training exercise based upon error rate.  

## Issues
The 'paper' can appear to sit above the typewriter, disconnected from it. We need to calculate the paper size better. 

# Bootstrapped with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More about Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
