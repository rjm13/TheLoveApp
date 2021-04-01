import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StatusBar} from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import CommunicationFlatList from '../components/CommunicationFlatList';
import TherapyFlatList from '../components/TherapyFlatList';


const data = [
  {
      id: '1',
      title: 'The Art of the Sensual Massage',
      subtitle: 'Blog subtitle',
      author: 'Amy McDonald',
      image: {uri: 'https://miro.medium.com/max/6300/1*AuC-4OBAmb9HhfI-mQvd1A.jpeg'}
    },
  {
    id: '2',
    title: '10 Tricks to Try',
    subtitle: 'Blog subtitle',
    author: 'Tina Fey',
    image: {uri: 'https://post.healthline.com/wp-content/uploads/2020/09/4703-couple_bed-1200x628-facebook-1200x628.jpg'}
    
  },
  {
    id: '3',
    title: 'The Working Man',
    subtitle: 'Blog subtitle',
    author: 'Collin Flannery',
    image: {uri: 'https://miro.medium.com/max/6300/1*AuC-4OBAmb9HhfI-mQvd1A.jpeg'}
},
  {
    id: '4',
    title: 'Sex in 2021',
    subtitle: 'Blog ',
    author: 'Miley Cyrus',
    image: {uri: 'https://post.healthline.com/wp-content/uploads/2020/09/4703-couple_bed-1200x628-facebook-1200x628.jpg'}
},
]


const Item = ({title, subtitle, author, image}) => {


  return (
    <View style={styles.card}>
        <ImageBackground 
            source={image}
            style={{
                    //resizeMode: 'cover',
                    //width: 300,
                    //height: 220,
            }}
            imageStyle={{ borderRadius: 16, borderWidth: 0.1, borderColor: '#ffffffa5'}}
        >
            <View style={{ justifyContent: 'space-between', height: 220}}>
                <View style={{alignItems: 'center', margin: 10 }}>
                    <Text style={[styles.subtitle, {backgroundColor: '#000000a5', padding: 2, borderRadius: 10, opacity: .8}]}>
                        {author}
                    </Text>
                </View>
                <View style={[styles.subtitleblock, {backgroundColor: '#363636a5',}]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {subtitle}
                    </Text>
                </View>
            </View>
        </ImageBackground>  
    </View>
  );
}

const Bond = () => {

    const [isVisible, setIsVisible] = useState(false);

    const renderItem = ({ item }) => (
        <Item 
        title={item.title}
        author={item.author}
        subtitle={item.subtitle}
        image={item.image}
        />
    );

  return (
    <View style={styles.container}>
        <ScrollView stickyHeaderIndices={[0]} >

            <View>
            <View style={styles.headerrow}> 
                <FontAwesome 
                    name='heart'
                    size={20}
                    color='#fff'
                    style={{ paddingHorizontal: 20, marginTop: 30, }}
                    //onLongPress={() => !setIsVisible}
                    onPress={() => setIsVisible(isVisible ? false : true)} 
                />
                {/* <FontAwesome5 
                    name='ellipsis-v'
                    size={20}
                    color='#fff'
                    style={{ paddingHorizontal: 20, marginTop: 30, }}
                    onPress={() => alert('Link to sexy Spotify Playlist')}
                /> */}
            </View>
            </View>

            <View style={styles.background}>
                <View style={styles.popup}>
                    { isVisible ? (
                        <ImageBackground 
                        source={(require('../assets/heart-white.png'))}
                        style={{
                                //resizeMode: 'fit',
                                //width: 300,
                                //height: 220,
                        }}
                        imageStyle={{
                            resizeMode: 'contain',
                        }}
                        >
                            <View style={styles.popupblock}>
                                <Text style={styles.title}>
                                    Date Idea
                                </Text>
                                <Text style={styles.popuptext}>
                                    Test popup
                                </Text>
                            </View>
                        </ImageBackground>
                    ) : false } 
                </View>
            </View>

            <View style={{alignItems: 'center'}}>
                <Carousel
                    data={data}
                    renderItem={renderItem}
                    sliderWidth={360}
                    itemWidth={280}
                />
            </View>

            <View style={{ marginVertical: 20}}>
                <CommunicationFlatList />
            </View>

            <View style={{ marginVertical: 20}}>
                <TherapyFlatList />
            </View>

        

        </ScrollView>

        <ImageBackground
        source={require('../assets/beach.jpg')}
        style={styles.image}
        imageStyle={{ borderRadius: 16}}
        >
        <LinearGradient 
        colors={['transparent', '#000']}
        style={{ width: '100%', height: 350,  }} />

        </ImageBackground>
            <StatusBar style="light" />
    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#000'
  },
  containernew: {
    // alignItems: 'center',
    // //justifyContent: 'space-around',
    // //marginHorizontal: 40,
    // padding: 20,
    // marginVertical: 20,
    // borderWidth: 0.5,
    // borderColor: '#fff',
    // borderRadius: 16,
    // //width: Dimensions.get('window').width,
    // width: '100%',
    // height: 100,
    // flexDirection: 'row',
    // backgroundColor: '#422e42'
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 10,
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
  background: {
    width: '100%',
    height: 280,
    justifyContent: 'flex-end',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 350,
    position: 'absolute',
    zIndex: -1,
    //justifyContent: 'flex-end',
  },
  headerrow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 20,
    marginHorizontal: 10,
  },
  popup: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  popupblock: {
    marginHorizontal: 40,
    marginVertical: 100,
    width: 200,
    alignItems: 'center',
  },
  popuptext: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20
  },
  card: {
    marginVertical: 20,
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
    //height: 80, 
    padding: 5,
    justifyContent: 'center'
  },
});

export default Bond;
