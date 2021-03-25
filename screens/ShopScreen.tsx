import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {StatusBar} from 'expo-status-bar';

import Carousel from 'react-native-snap-carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import NavMenu from '../navigation/navmenu';


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
      <View style={styles.containernew}>
          <Text style={styles.title}>
              {name}
          </Text>
      </View>
  );
}

const ShopScreen = () => {

  const renderItem = ({ item }) => (
    <Item 
      name={item.name}
      gender={item.gender}
      />
  );

  function SearchBar () {

    const [searchQuery, setSearchQuery] = useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
  
    return (
      <View>
        
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          iconColor='purple'
          style={{
            height: 35,
            width: '89%',
            marginHorizontal: 20,
            borderRadius: 8,
            backgroundColor: '#a1a1a1',
          }}
          inputStyle={{fontSize: 16,}}
        />
  
  
      </View>
    );
  };

  return (

    <View style={styles.container}>

      <View style={{ backgroundColor: 'transparent'}}>
        <View>
          <SearchBar />
        </View>
        
        <View>
          <NavMenu />
        </View>
      </View>

      <ScrollView>
        <View style={{ height: 1600}}>
          <Text style={{ color: 'white'}}> test</Text>
        </View>
      </ScrollView>

      
      
      <StatusBar style="light" />
    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2b292ba5'
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containernew: {
    alignItems: 'center',
    justifyContent: 'space-around',
    //marginHorizontal: 40,
    padding: 20,
    marginVertical: 20,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 16,
    //width: Dimensions.get('window').width,
    width: 260,
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#422e42'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchblock: {
    padding: 10,
    //marginVertical: 10,
  },
  search: {
    //width: '90%',
    height: 40,
    margin: 5,
    borderRadius: 8,
    backgroundColor: 'gray',
  },
  searchtext: {
    fontSize: 16,
  },
});

export default ShopScreen;
