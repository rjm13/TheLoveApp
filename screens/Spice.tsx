import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import GuidesFlatList from '../components/GuidesFlatList';
import GamesFlatList from '../components/GamesFlatList';
import HolidayCard from '../components/HolidayCard';


const SpiceHomeScreen = ({navigation}) => {


  return (
    <View style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[0]}
      >
        <View>
          <View style={styles.headerrow}> 
            <FontAwesome5 
                name='book-reader'
                size={20}
                color='#fff'
                style={{ paddingHorizontal: 30, marginTop: 40, }}
                onPress={() => navigation.navigate('AudioStoryHome')}
            />
            
          </View>
        </View>

        
        <View>
          <HolidayCard />
        </View>
        
        <View style={styles.block}>


          <View style={[styles.card, { backgroundColor: '#509beb'}]}>
            <View style={{alignItems: 'center', margin: 10 }}>
              <Text style={[styles.subtitle, {backgroundColor: '#614c6ea6', padding: 2, borderRadius: 10, opacity: .8}]}>
                45/150
              </Text>
            </View>


            <View>
              <LinearGradient 
                colors={['#363636a5', '#1f64ad']}
                style={styles.subtitleblock}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                >
                  <Text style={styles.title}>
                    Break the Ice
                  </Text>
                  <Text style={styles.subtitle}>
                    150 intimate questions
                  </Text>
                </LinearGradient>
            </View>  
          </View>

          <View style={[styles.card, { backgroundColor: '#a070c2'}]}>
          <View style={{alignItems: 'center', margin: 10 }}>
              <Text style={[styles.subtitle, {backgroundColor: '#614c4ea6', padding: 2, borderRadius: 10, opacity: .8}]}>
                12/32
              </Text>
            </View>

            <View>
            <LinearGradient 
                colors={['#363636a5', '#693a8a']}
                style={styles.subtitleblock}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                >
              <Text style={styles.title}>
                Test the Limits
              </Text>
              <Text style={styles.subtitle}>
                32 bedroom challenges
              </Text>
              </LinearGradient>
            </View>  
          </View>

        </View>

        <View style={{marginVertical: 10}}>
          <GuidesFlatList />
        </View>

        <View style={{marginVertical: 10}}>
          <GamesFlatList />
        </View>

      </ScrollView>

      <ImageBackground
      source={{ uri: 'https://media.architecturaldigest.com/photos/5e6656e53a149b0008a4636a/master/w_1600%2Cc_limit/Dive_Motel_Rooms-11.jpg'}}
      style={styles.image}
      imageStyle={{ borderRadius: 16}}
      >
      <LinearGradient 
        colors={['transparent', '#000']}
        style={{ width: '100%', height: 330,  }} />

      </ImageBackground>

      <StatusBar style="light" />
    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
  headerrow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
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
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 11,
    color: '#fff',
    //fontWeight: 'bold',
    paddingHorizontal: 10,
    
    
  },
  subtitleblock: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    //backgroundColor: '#614c6ea6',
    height: 60, 
    justifyContent: 'center'
  },

  block: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
    marginVertical: 20,
    
  },
  card: {
    width: '45%',
    height: 200,
    borderRadius: 16,
    //borderColor: 'gray',
    //borderWidth: 0.5,
    margin: 10,
    justifyContent: 'space-between',

  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 330,
    position: 'absolute',
    zIndex: -1,
    //justifyContent: 'flex-end',
  },
  holidaycard: {
    //marginTop: 200,
    width: '90%',
    height: 100,
    alignItems: 'center',
    //borderWidth: 0.5,
    //borderColor: 'gray',
    borderRadius: 16,
    margin: 10,
    alignSelf: 'center',
    
    
    
  },


});

export default SpiceHomeScreen;
