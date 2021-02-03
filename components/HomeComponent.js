import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { WEAPONS } from '../shared/weapons';

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
            weapons: WEAPONS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderHomeItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: require('./images/RaiderAxe.png')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.weapons}
                renderItem={renderHomeItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Home;