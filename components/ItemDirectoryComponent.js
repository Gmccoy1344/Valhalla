import React from 'react';
import { Component } from 'react';
import { View, Button, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { WEAPONS } from '../shared/weapons';
import { ARMOR } from '../shared/armor';
import { LORE } from '../shared/lore';
import { LOCATIONS } from '../shared/locations';


class ItemDirectory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weapons: WEAPONS,
            locations: LOCATIONS,
            lore: LORE,
            armor: ARMOR,
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('directoryTitle')
        };
    };

    render() {
        const { navigate } = this.props.navigation;
        const directoryId = this.props.navigation.getParam('directoryId');
        let directory = [];
        switch (directoryId) {
            case 0:
                directory = this.state.lore;
                break;
            case 1:
                directory = this.state.weapons;
                break;
            case 2:
                directory = this.state.armor;
                break;
            case 3:
                directory = this.state.locations;
                break;
        };

        const renderDirectory = ({item}) => {
            if(item) {
                return (
                    <Card
                        featuredTitle={item.name}
                        image={require('./images/RaiderAxe.png')}
                    >
                        <Button 
                            title='Go to'
                            onPress={() => navigate('ItemInfo', {itemId: item.id, itemName: item.name, directory: directory})}
                        />
                    </Card>
                );
            }
            return <View />
        }
        

        return (
            <FlatList
                data={directory}
                renderItem={renderDirectory}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default ItemDirectory;