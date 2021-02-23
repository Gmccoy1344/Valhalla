import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { WEAPONS } from '../shared/weapons';
import { ARMOR } from '../shared/armor';
import { LORE } from '../shared/lore';
import { LOCATIONS } from '../shared/locations';

class ItemInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weapons: WEAPONS,
            locations: LOCATIONS,
            lore: LORE,
            armor: ARMOR
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('itemName')
        };
    };

    render() {
        const directory = this.props.navigation.getParam('directory');
        const itemId = this.props.navigation.getParam('itemId');

        const activeItem = directory.filter(item => item.id === itemId)[0];

        return (
            <View>
                <Text>{activeItem.name}</Text>
            </View>
        );
    }
}

export default ItemInfo;