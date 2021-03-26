import React, {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-snap-carousel';

import { useNavigation } from '@react-navigation/native';


import PartnerTile from './partnertile';
import Navigation from '../navigation';

const data = [
    {
        id: '1',
        name: 'Meghan',
        gender: 'female'
    },
    {
        id: '2',
        name: 'Joe BigDick',
        gender: 'male'
    },
    {
        id: '3',
        name: 'Anal Angel',
        gender: 'trans'
    },
    {
        id: '2',
        name: 'Alexis Texis',
        gender: 'female',
    },
]

const Item = ({name, gender, id}) => {

    const navigation = useNavigation();

    const [isVisible, setIsVisible] = useState(false);

    //const [userID, setUserId] = useState(id);

    return (
        <View style={styles.container}>
        <View style={styles.rowcontainer}>
            <View style={{ flexDirection: 'row'}}>
                <FontAwesome5 
                    name= {gender === 'female' ? 'venus' : gender === 'male' ? 'mars' : gender === 'trans' ? 'transgender' : 'genderless'}
                    color='gold'
                    size={30}
                    style={{
                        marginVertical: 10,
                        marginHorizontal: 20,
                    }}
                />
                <View>
                    <Text style={styles.title}>
                        {name}
                    </Text> 
                    <Text style={{ color: '#fff', marginVertical: 4,}}>
                        is feeling sexy
                    </Text>
                </View>
                </View>

                <TouchableOpacity 
                onPress={() => {navigation.navigate ('Partner', {id: id})}}
                >
                    <View>
                        <Text style={{ 
                            color: 'white', 
                            paddingVertical: 4, 
                            paddingHorizontal: 20,
                            borderWidth: 0.3,
                            borderRadius: 16,
                            borderColor: 'white',
                            fontSize: 12,
                        }}>
                            View
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* { isVisible ? (
                <View style={styles.popupblock}>
                    <Text style={styles.title}>
                        Date Idea
                    </Text>
                    <Text style={styles.popuptext}>
                        Test popup
                    </Text>
                </View>
            ) : false } */}
            
        
        </View>
    );
}

const PartnerList = () => {

    const renderItem = ({ item }) => (
        <Item 
            id={item.id}
            name={item.name}
            gender={item.gender}
        />
      );

    return (
        <SafeAreaView style={{marginHorizontal: 20}}>
            <View style={styles.header}>
                <Text style={styles.listheader}>
                    My Partners
                </Text>
                <View style={styles.buttonbox}>
                    <Text style={styles.button}>
                        Add
                    </Text>
                </View>
            </View>

            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={320}
              itemWidth={320}
              layout={'tinder'} 
              layoutCardOffset={8}
            />

            {/* <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                stickyHeaderIndices={[0]}
                getItemLayout={(item, index) => { return {length: 320, index: index, offset: 320 * index} }}
            /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        marginVertical: 20,
        borderWidth: 0.3,
        borderColor: '#fff',
        borderRadius: 16,
        width: 320,
        backgroundColor: '#2b292b'
      },
    rowcontainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: 300,
        flexDirection: 'row',
        backgroundColor: '#2b292b'
    },
    header: {
        flexDirection: 'row', 
        paddingHorizontal: 0, 
        paddingTop: 20, 
        justifyContent: 'space-between',
        borderTopWidth: 0.3,
        borderColor: 'gray',

    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    listheader: {
        fontSize: 18,
        //fontWeight: 'bold',
        color: '#fff',
      },
      button: {
        fontSize: 12,
        //fontWeight: 'bold',
        color: '#fff',
      },
      buttonbox:
      {
        //margin: 20,
        borderWidth: 0.5,
        borderColor: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 20,
        borderRadius: 20,
      },
  });

export default PartnerList;