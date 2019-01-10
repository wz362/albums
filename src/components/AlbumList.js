import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
    componentWillMount() {
        console.log('compenentWillMount in AlbumList');
    }

    render() {
        return (
            <View> 
                <Text>Album List!!!</Text>
            </View>
        );
    }
} /* Class does not need ';' */

export default AlbumList;
