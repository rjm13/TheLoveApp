import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {StatusBar} from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';

import Carousel from 'react-native-snap-carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import NavMenu from '../navigation/navmenu';
import ToysFlatList from '../components/ToysFlatList';



const ShopScreen = () => {

  const route = useRoute();

    const selectedId = route.params;
    //const {selectedId} = route.params;

    console.log(selectedId);

    function renderElement () {


      if(selectedId === undefined){
        return (<View>
          <Text style={{ color: 'white'}}>
            Test 1
          </Text>
        </View>);
    }
        if(selectedId === '1'){
            return (<View>
              <Text style={{ color: 'white'}}>
                Test 1
              </Text>
            </View>);
        }
        else if(selectedId === '2' ){
            return (<View>
              <Text style={{ color: 'white'}}>
                Test
              </Text>
            </View>);
        }
        else if(selectedId === '3' ){
            return <ToysFlatList />;
        }
        else if(selectedId === '4' ){
            return (<View>
              <Text style={{ color: 'white'}}>
                Test 4
              </Text>
            </View>);
        }
        
    }


  function SearchBar () {

    const [searchQuery, setSearchQuery] = useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
  
    return (
      <View>
        
        <Searchbar
          placeholder="Search"
          placeholderTextColor='#ffffffa5'
          onChangeText={onChangeSearch}
          //onIconPress={onChangeSearch}
          value={searchQuery}
          iconColor='#ffffffa5'
          style={{
            height: 35,
            width: 280,
            marginHorizontal: 20,
            borderRadius: 8,
            backgroundColor: '#363636a5',
          }}
          inputStyle={{fontSize: 16, color: '#fff'}}
        />
  
  
      </View>
    );
  };

  return (

    <View style={styles.container}>

      <View style={{ backgroundColor: 'transparent', marginTop: 50}}>
      <View style={{ alignItems: 'center',justifyContent: 'space-between',flexDirection: 'row', width: Dimensions.get('window').width}}>
                <SearchBar />
                <FontAwesome5
                    name='shopping-cart'
                    color='#fff'
                    size={20}
                    style={{  
                        marginRight: 20}}
                />
            </View>
            
        
        <View>
          <NavMenu />
        </View>
      </View>

      <View style={{ alignSelf: 'center', height: '84%'}}>
        {renderElement()}
      </View>
      

      
      
      <StatusBar style="light" />
    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
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
