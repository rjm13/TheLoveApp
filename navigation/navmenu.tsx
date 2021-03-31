import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect, useRef, useCall} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const DATA = [
    {
      id: '1',
      title: 'Home'
    },
    {
      id: '2',
      title: 'Best Sellers'
    },
    {
      id: '3',
      title: 'Toys'
    },
    {
      id: '4',
      title: 'Fetish'
    },
    {
      id: '5',
      title: 'BDSM'
    },
    {
      id: '6',
      title: 'Clothes'
    },

  ];
  
  const Item = ({ title, onPress, style, textstyle }) => (

    <TouchableWithoutFeedback 
      onPress={onPress}
      style={styles.content}>
          <View style={[styles.menubutton, style]}>
                        <Text style={[styles.buttontext, textstyle]}>
                            {title}
                        </Text>
                    </View>
    </TouchableWithoutFeedback>
    
  );
  
  const NavMenu = () => {

    const [selectedId, setSelectedId] = useState('1');

    const navigation = useNavigation();

    const route = useRoute();

    // useEffect(() => {
    //   if (route.params?.selectedId) {
    //     // Post updated, do something with `route.params.post`
    //     // For example, send the post to the server

    //   }
    // }, [route.params?.selectedId]);

   

  

    const renderItem = ({ item, index }) => {
      const backgroundColor = item.id === selectedId ? 'gold' : 'transparent';
      const color = item.id === selectedId ? '#000' : 'gold';
      const opacity = item.id === selectedId ? 1 : 0.7;

      return (
        <Item
          title={item.title}
          onPress={() => ScrollToThisThing(index, item)}
          style={{ backgroundColor, opacity }}
          textstyle={{ color }}
          //opacity={{ opacity }}
        />
      );
    };

    const flatListRef = useRef(null);


    // async function ScrollToThisThing  (index, item ) {

    //   setSelectedId(item.id);
    //   navigation.navigate('Candidate', {selectedId: selectedId})
    //   //flatListRef.current.scrollToItem({ item: item, animated: true, viewPosition: 1 })
    // };

    const ScrollToThisThing = (index, item) => {
      setSelectedId(item.id);
      flatListRef.current.scrollToItem({ item: item, animated: true, viewPosition: 1 })
    }
    
    useEffect(() => {
      navigation.navigate('Shop', {selectedId: selectedId});
    }, [selectedId]);




    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          ref={flatListRef}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          getItemLayout={(item, index) => { return {length: 166, index: index, offset: 166 * index} }}

        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginLeft: 20
    },
    content: {
      marginTop: 20,
      marginBottom: 10,
      marginRight: 20
      
      
    },
    
    menubutton: {
        borderColor: 'gold',
        borderRadius: 16,
        borderWidth: 1,

    },
    buttontext: {
        fontSize: 16,
        color: 'gold',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
  });
  
  export default NavMenu;