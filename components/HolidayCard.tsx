import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

const HolidayCard = () => {


    return (
        <View>
            <LinearGradient 
                colors={['#FFD700', '#FFD700']}
                style={styles.holidaycard}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }} >

                
                    <View style={{ 
                        marginRight: 10,
                        padding: 10,
                        backgroundColor: '#000000',
                        borderRadius: 15,
                        elevation: 8,
                        

                        
                        }}>
                       <Text style={[styles.title, { marginBottom: 5}]}>
                            December
                        </Text> 
                        <View style={{ flexDirection: 'row',justifyContent: 'space-between',width: 70, height: 45,}}>
                            
                            <Text style={{ 
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold',
                                paddingHorizontal: 10, 
                                paddingVertical: 10,
                                backgroundColor: '#ffffff',
                                
                                elevation: 8,
                                borderRadius: 4,
                            }}>
                                2
                            </Text>
                            <Text style={{
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold',
                                paddingHorizontal: 10, 
                                paddingVertical: 10,
                                
                                backgroundColor: '#ffffff',
                                elevation: 8,
                                borderRadius: 4,
                            }}>
                                4
                            </Text>
                            
                        </View>
                    </View>
                    
                    
                

                <View style={{ marginHorizontal: 0 , width: '65%', justifyContent: 'space-around'}}>
                    <Text style={{ color: '#000', fontSize: 16, flexWrap: 'wrap', fontWeight: 'bold'}}>
                        It's Steak and Blowjob Day!
                    </Text>
                    <Text style={{ color: '#000', fontSize: 12, flexWrap: 'wrap',}}>
                        It's the opposite of Valentine's Day. Give your man a treat
                    </Text>
                </View>
                

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
      //marginLeft: 10,
    },
    subtitle: {
      fontSize: 11,
      color: '#fff',
      //fontWeight: 'bold',
      paddingHorizontal: 10,
    },
    holidaycard: {
      marginTop: 330,
      width: '90%',
      //alignItems: 'center',
      //borderWidth: 0.5,
      //borderColor: 'gray',
      borderRadius: 16,
      margin: 10,
      alignSelf: 'center', 
      flexDirection: 'row',
      padding: 10,
      //justifyContent: 'space-between',
    },
  });
  
  export default HolidayCard;