import React, { Component } from 'react';
import { ScrollView, Text, View, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { WEAPONS } from '../shared/weapons';

function RenderItem(props) {
    const { weapon } = props;
    const { navigate } = props;
    if(weapon) {
        return (
            <Card
                featuredTitle={weapon.name}
                image={require('./images/RaiderAxe.png')}
            >
                <Text
                    style={{margin: 10}}>
                    {weapon.description}
                </Text>
                <Button 
                    title='Go to'
                    onPress={() => navigate('WeaponInfo', {weaponId: weapon.id})}
                />
            </Card>
        );
    }
    return <View />
}

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
        return(
            <ScrollView >
                <Card>
                    <View style={{alignItems: 'center', borderBottomWidth: 1, paddingBottom: 5}}>
                        <Text style={styles.Header}>Welcome to Valhalla!</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.Introduction}>
                            Here you will be able to get more information about about Assassin's Creed Valhalla.  
                            This app will provide you with details on weapons and gear as well as how locate those special items.
                            You can also find information on where to find resources and collectables. If you are interested in lore
                            feel free to explore the lore tab where you can get as much information as we can provide. Below on this
                            page will display special featured items for the week. Enjoy and have fun exploring Valhalla. SKAL!
                        </Text>
                    </View>
                </Card>
                <RenderItem 
                    weapon={this.state.weapons.filter(weapon => weapon.featured)[0]}
                    navigate = {this.props.navigation}
                />
                <RenderItem 
                    weapon={this.state.weapons.filter(weapon => weapon.featured)[0]} 
                />
                <RenderItem 
                    weapon={this.state.weapons.filter(weapon => weapon.featured)[0]} 
                />
                <RenderItem 
                    weapon={this.state.weapons.filter(weapon => weapon.featured)[0]} 
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    Header: {
        flex: 1,
        paddingEnd: 10,
        fontSize: 20,
    },
    Introduction: {
        alignItems: 'center',
        fontSize: 15,
        flex: 1
    }

})

export default Home;