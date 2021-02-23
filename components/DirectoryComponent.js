import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import { CATEGORIES } from '../shared/categories';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: CATEGORIES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <View >
                    <Tile
                        title={item.title}
                        featured
                        imageSrc={item.img}
                        onPress={() => navigate('ItemDirectory', {directoryId: item.id, directoryTitle: item.title})}
                    />
                </View> 
            );
        };
    
        return (
            <FlatList
                data={this.state.categories}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;