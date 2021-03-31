import React from 'react';
import {Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';

const DATA = [
    {
        id: '1',
        name: 'Small Butt Plug',
        category: 'plug',
        brand: 'ExtacyCentral',
        price: 26.50,
        image: {uri: 'https://static2.nordic.pictures/4251800-thickbox_default/lucent-jewel-buttplug.jpg'}
    },
    {
        id: '2',
        name: 'Medium Butt Plug',
        category: 'plug',
        brand: 'ExtacyCentral',
        price: 26.50,
        image: {uri: 'https://static2.nordic.pictures/4251800-thickbox_default/lucent-jewel-buttplug.jpg'}
    },
    {
        id: '3',
        name: 'Large Butt Plug',
        category: 'plug',
        brand: 'ExtacyCentral',
        price: 26.50,
        image: {uri: 'https://static2.nordic.pictures/4251800-thickbox_default/lucent-jewel-buttplug.jpg'}
    },
    {
        id: '4',
        name: 'Huge Black Gigantasaurus Butt Plug',
        category: 'plug',
        brand: 'ExtacyCentral',
        price: 26.50,
        image: {uri: 'https://static2.nordic.pictures/4251800-thickbox_default/lucent-jewel-buttplug.jpg'}
    },
    {
        id: '5',
        name: 'Jewel Butt Plug',
        category: 'plug',
        brand: 'ExtacyCentral',
        price: 26.50,
        image: {uri: 'https://static2.nordic.pictures/4251800-thickbox_default/lucent-jewel-buttplug.jpg'}
    },
    {
        id: '6',
        name: 'Beginners Plug',
        category: 'plug',
        brand: 'ExtacyCentral',
        price: 26.50,
        image: {uri: 'https://static2.nordic.pictures/4251800-thickbox_default/lucent-jewel-buttplug.jpg'}
    },
    {
        id: '7',
        name: 'Self Lubricating Plug',
        category: 'plug',
        brand: 'ExtacyCentral',
        price: 26.50,
        image: {uri: 'https://static2.nordic.pictures/4251800-thickbox_default/lucent-jewel-buttplug.jpg'}
    },
]



const Item = ({name, category, brand, price, image}) => {

    const navigation = useNavigation();

    return ( 
            <View style={styles.tile}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('ItemPage') }>
                            <Image 
                                source={image}
                                style={{
                                    height: 100,
                                    width: 100,
                                    resizeMode: 'cover',
                                    borderRadius: 20,
                                    marginRight: 10,
                                }}
                            />
                        </TouchableOpacity>
                        
                        <View style={{ justifyContent: 'space-between'}}>
                            <View style={{ }}>
                                <Text style={styles.title}>
                                    {name}
                                </Text> 
                                <Text style={styles.subtext}>
                                    {brand}
                                </Text>
                            </View>
                            <View style={{ marginTop: 10}}>
                                <Text style={styles.price}>
                                    ${price}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <Feather 
                        name='more-vertical'
                        color='#fff'
                        size={20}
                    /> 
                </View> 
            </View>
    );
}

const ItemList = () => {

    const renderItem = ({ item }) => (
        <Item 
          name={item.name}
          image={item.image}
          category={item.category}
          brand={item.brand}
          price={item.price}
          />
      );

    return (
        <View style={styles.container}>
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <View style={{
                        marginTop: 10,
                        marginBottom: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                    }}>
                        <Text style={{ color: 'white', fontSize: 18,}}> 
                            Plugs
                        </Text>
                        <FontAwesome5 
                            name='sort'
                            color='#fff'
                            size={20}
                        />
                    </View>
                )}
                ListFooterComponent={(
                    <View style={{
                        marginVertical: 40,
                        alignItems: 'center',
                    }}>
                        <Text style={{ color: 'white'}}> 
                            Show More
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    tile: {
        marginBottom: 10,
        marginHorizontal: 5,
        backgroundColor: '#363636a5',
        borderRadius: 15,
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        flexWrap: 'wrap',
        width: 195,
    },
    price: {
        fontSize: 16,
        color: '#fff',
    },
    subtext: {
        fontSize: 12,
        color: '#ffffffa5',
    },
});

export default ItemList;