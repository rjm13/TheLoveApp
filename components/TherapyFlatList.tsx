import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const guides = [
  {
      id: '1',
      title: 'Getting Started',
      image: {uri: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/kama-sutra-illustrated-poses-named-with-films-gina-dsgn.jpg'}
  },
  {
      id: '2',
      title: 'Bonding',
      image: {uri: 'https://post.healthline.com/wp-content/uploads/2020/09/4703-couple_bed-1200x628-facebook-1200x628.jpg'}
  },
  {
      id: '3',
      title: 'Love Languages',
      image: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpXeWrcaYaU0Rh1rtyONzJweohoVkShBJog&usqp=CAU'}
  },
  {
      id: '4',
      title: 'Marriage Tips',
      image: {uri: 'https://miro.medium.com/max/6300/1*AuC-4OBAmb9HhfI-mQvd1A.jpeg'}
  },
  {
    id: '5',
    title: 'Sex After 50',
    image: {uri: 'https://miro.medium.com/max/6300/1*AuC-4OBAmb9HhfI-mQvd1A.jpeg'}
    },
    {
    id: '6',
    title: 'Sexual Health',
    image: {uri: 'https://miro.medium.com/max/6300/1*AuC-4OBAmb9HhfI-mQvd1A.jpeg'}
    },
    {
    id: '7',
    title: 'Bedroom Safety',
    image: {uri: 'https://miro.medium.com/max/6300/1*AuC-4OBAmb9HhfI-mQvd1A.jpeg'}
    },
]


const Item = ({title, image}) => {


  return (
      <View style={styles.containernew}>
          <ImageBackground
            source={image}
            style={styles.image}
            imageStyle={{ borderRadius: 16}}
          >
             <Text style={styles.title}>
              {title}
            </Text> 
          </ImageBackground>
          
      </View>
  );
}

const GuidesFlatList = () => {

  const renderItem = ({ item }) => (
    <Item 
      title={item.title}
      image={item.image}
      />
  );

  return (
    <View>

      <View style={{ marginHorizontal: 20}}>
          <Text style={styles.header}>
            Therapy Topics
          </Text>
      </View>

        <FlatList
            data={guides}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}       
        />
 
    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    color: '#fff',
  },
  containernew: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 20,
    marginVertical: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#000000a0',
  },
  image: {
    resizeMode: 'cover',
    width: 140,
    height: 100,
    justifyContent: 'flex-end',
  },
});

export default GuidesFlatList;
