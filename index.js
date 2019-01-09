// Index.ios.js -  place code in here for IOS

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native'; /* Imports Destructuring */

// Create a compenent  /* One Compoenent per file */
const App = () => (
    <Text>Some Text</Text> 
    /* JSX: an extension to Javascript language that is used to write 
            re-act components
    */
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
/*                              |           |
                                |           |
                            project name    |
                                            |
                                function that return the first 
                                component to render in the 
                                application
    
Note: For every react native app, we have to register at least one component.
*/
