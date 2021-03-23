import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const PartnerTile = () => {


    return (
        <View style={styles.container}>
            <FontAwesome5 
                name='venus'
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
                Meghan
            </Text>
        </View>
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
      flexDirection: 'row',
      backgroundColor: '#422e42'

    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
  });

  export default PartnerTile;