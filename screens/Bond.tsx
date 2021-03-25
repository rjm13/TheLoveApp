import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
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
      title: 'Blog Title',
      subtitle: 'Blog subtitle',
      author: 'Author',
      image: { uri: ''}
  },
  {
    id: '1',
    title: 'Blog Title 2',
    subtitle: 'Blog subtitle',
    author: 'Author',
    image: { uri: ''}    
  },
  {
    id: '1',
    title: 'Blog Title 3',
    subtitle: 'Blog subtitle',
    author: 'Author',
    image: { uri: ''}
  },
  {
    id: '1',
    title: 'Blog Title 4',
    subtitle: 'Blog subtitle',
    author: 'Author',
    image: { uri: ''}
  },
]


const Item = ({title, subtitle, author, image}) => {


  return (
    <View style={styles.card}>
        <View style={{alignItems: 'center', margin: 10 }}>
        <Text style={[styles.subtitle, {backgroundColor: '#614c6ea6', padding: 2, borderRadius: 10, opacity: .8}]}>
            {author}
        </Text>
        </View>
        <View style={[styles.subtitleblock, {backgroundColor: '#614c6ea6'}]}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        </View>  
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
        />
    );

  return (
    <View style={styles.container}>
        <ScrollView stickyHeaderIndices={[0]} >

            <View>
            <View style={styles.headerrow}> 
                <FontAwesome5.Button 
                    name='podcast'
                    size={20}
                    backgroundColor='transparent'
                    style={{ paddingHorizontal: 20, marginTop: 30, }}
                    onPress={() => alert('Redord an audio short story')}
                />
                <FontAwesome5.Button 
                    name='ellipsis-v'
                    size={20}
                    backgroundColor='transparent'
                    style={{ paddingHorizontal: 20, marginTop: 30, }}
                    onPress={() => alert('Link to sexy Spotify Playlist')}
                />
            </View>
            </View>

            <View style={styles.background}>
                <View style={styles.popup}>
                    { isVisible ? (
                        <View style={styles.popupblock}>
                            <Text style={styles.title}>
                                Date Idea
                            </Text>
                            <Text style={styles.popuptext}>
                                Test popup
                            </Text>
                        </View>
                    ) : false }
                    
                        <TouchableOpacity 
                            onLongPress={() => setIsVisible(true)}
                            onPress={() => setIsVisible(false)} >
                            <FontAwesome
                                name='heart'
                                size={30}
                                color='#fff'
                                style={{  }}
                            /> 
                        </TouchableOpacity>    
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
        colors={['transparent', '#161516']}
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
    backgroundColor: '#161516'
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
    fontSize: 20,
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
    height: 330,
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
    justifyContent: 'flex-end', 
  },
  popup: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  popupblock: {
    marginHorizontal: 40,
    marginVertical: 100,
    alignItems: 'center',
  },
  popuptext: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20
  },
  card: {
    width: '100%',
    height: 200,
    //backgroundColor: 'blue',
    borderRadius: 16,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginVertical: 20,
    //marginHorizontal: 20,
    justifyContent: 'space-between',

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
});

export default Bond;
