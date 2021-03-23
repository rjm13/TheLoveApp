import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-snap-carousel';


import PartnerTile from './partnertile';

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

const Item = ({name, gender}) => {


    return (
        <View style={styles.container}>
            <FontAwesome5 
                name= {gender === 'female' ? 'venus' : gender === 'male' ? 'mars' : gender === 'trans' ? 'transgender' : 'genderless'}
                color='#000'
                size={30}
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 12,
                    borderWidth: 0.5,
                    borderColor: '#fff',
                    backgroundColor: 'gold',
                    borderRadius: 60,
                    opacity: 0.8,

                }}
            />
            <Text style={styles.title}>
                {name}
            </Text>
        </View>
    );
}

const PartnerList = () => {

    const renderItem = ({ item }) => (
        <Item 
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
              layoutCardOffset={`8`}
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
      justifyContent: 'space-around',
      //marginHorizontal: 40,
      padding: 20,
      marginVertical: 20,
      borderWidth: 0.5,
      borderColor: '#fff',
      borderRadius: 16,
      //width: Dimensions.get('window').width,
      width: 320,
      height: 100,
      flexDirection: 'row',
      backgroundColor: '#422e42'

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