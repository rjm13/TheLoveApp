import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient';

import AudioStoryFlatList from '../components/AudioStorySectionList';
import Navigation from '../navigation';

const AudioStoryHome = ({navigation}) => {

    function SearchBar () {

        const [searchQuery, setSearchQuery] = useState('');
      
        const onChangeSearch = query => setSearchQuery(query);
      
        return (
          <View>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              iconColor='gray'
              style={{
                height: 35,
                width: 280,
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
        <View >
        <LinearGradient
        colors={['purple', 'black', 'black']}
        //style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
          
          <View style={{    flexDirection: 'row', justifyContent: 'space-between', 
                            marginTop: 40, marginBottom: 20, marginHorizontal: 20}}>
            <View style={{ flexDirection: 'row'}}>
                <FontAwesome5 
                    name='chevron-down'
                    color='#fff'
                    size={20}
                    onPress={() => navigation.goBack()}
                />
                <Text style={{ color: 'white', marginHorizontal: 20, fontSize: 16}}>
                    Stories
                </Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
            <FontAwesome5
                    name='microphone-alt'
                    size={22}
                    color='#fff'
                    style={{ paddingHorizontal: 10 }}
                    onPress={() => alert('Link to sexy Spotify Playlist')}
                />
                <FontAwesome
                    name='star'
                    size={20}
                    color='#fff'
                    style={{ paddingLeft: 30 }}
                    onPress={() => alert('Link to sexy Spotify Playlist')}
                />
            </View>
          </View>
        
            <View style={{ flexDirection: 'row', width: Dimensions.get('window').width}}>
                <SearchBar />
                <Ionicon
                    name='md-filter'
                    color='#fff'
                    size={20}
                    style={{  
                        marginRight: 20}}
                />
            </View>

            <View style={{ alignItems: 'center', marginTop: 20, height: '84%'}}>
                <AudioStoryFlatList />
            </View>
           
            
        
        </LinearGradient>
        </View>
    );
}

export default AudioStoryHome;