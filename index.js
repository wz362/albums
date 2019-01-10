// Index.ios.js -  place code in here for IOS

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native'; /* Imports Destructuring */
import Header from './src/components/Header'; /* Path if written by ourselves */
import AlbumList from './src/components/AlbumList';

// Create a compenent  /* One Compoenent per file */
const App = () => (
    /* JSX: an extension to Javascript language that is used to write 
            re-act components
        Note: Returns only one single top tag
    */
    <View style={{ flex: 1 }}> 
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    
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
    
Note: 
    For every react native app, we have to register at least one component.
    App is the 'root' component, only the root component uses 'AppRegistry'.
*/
