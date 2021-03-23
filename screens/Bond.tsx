import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const data = [
  {
      id: '1',
      name: 'Articles',
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

const Bond = () => {

  const renderItem = ({ item }) => (
    <Item 
      name={item.name}
      gender={item.gender}
      />
  );

  return (
    <View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesome5 
            name='caret-left'
            color='gray'
            size={20}
            style={{
                paddingHorizontal: 20,
                paddingVertical: 12,     
                backgroundColor: 'transparent',
            }}
        />

          <Carousel
                  data={data}
                  renderItem={renderItem}
                  sliderWidth={260}
                  itemWidth={260}
                />

        <FontAwesome5 
            name='caret-right'
            color='gray'
            size={20}
            style={{
                paddingHorizontal: 20,
                paddingVertical: 12,     
                backgroundColor: 'transparent',
            }}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>
          Sex Therapy Blog (10)
        </Text>
        <Text style={{color: '#fff'}}>
          Love Languages, Deadbedroom, Improving your sex life: gettng started, sexual compatability, 
          marriage tips, sex after 60, sex tips, sexual health and safety: STDs, consent, how to report,
          how to stay safe, safeword, expressing uncomfortablity, abusive relationship signs, 

        </Text>
        <Text style={styles.title}>
          Relationship Advice Forum
        </Text>
        <Text style={styles.title}>
          Communication and bonding exercises
        </Text>
        <Text style={styles.title}>
          Sex Therapy Podcasts
        </Text>
        <Text style={styles.title}>
          Date Ideas - generator
        </Text>
        
      </View>

      
      
    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default Bond;
