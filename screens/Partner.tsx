import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

 const PartnerInfo = () => {

    const route = useRoute();

    const {id} = route.params;

    console.log(id);

    return (
        <ScrollView>
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.name}>
                    Meghan
                </Text>
            </View>

            <View style={styles.mood}>
                <Text style={[styles.paragraph,  {color: 'white'}]}>
                    Current mood:
                </Text>
                <Text style={[styles.paragraph,  {color: 'white'}]}>
                    sexy
                </Text>
            </View>

            <View style={styles.tile}>

                <View style={styles.tileheader}>
                    <FontAwesome 
                        name='heart'
                        color='pink'
                        size={20}
                        style={{
                            marginRight: 10
                        }}
                    />
                    <Text style={styles.title}>
                        Love Languages
                    </Text>
                </View>  

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.loveiconbox}>
                        <FontAwesome5 
                            name='hands'
                            color='white'
                            size={20}
                            style={styles.loveicon}
                        />
                    </View>
                    <View style={styles.loveiconbox}>
                        <FontAwesome 
                            name='gift'
                            color='white'
                            size={20}
                            style={styles.loveicon}
                        />
                    </View>
                    <View style={styles.loveiconbox}>
                        <FontAwesome5 
                            name='fire'
                            color='white'
                            size={20}
                            style={styles.loveicon}
                        />
                    </View>
                    <View style={styles.loveiconbox}>
                        <FontAwesome5 
                            name='glass-cheers'
                            color='white'
                            size={20}
                            style={styles.loveicon}
                        />
                    </View>
                    <View style={styles.loveiconbox}>
                        <FontAwesome5 
                            name='apple-alt'
                            color='white'
                            size={20}
                            style={styles.loveicon}
                        />
                    </View>
                </ScrollView>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10}}>
                    <Text style={[styles.paragraph, {color: '#ffffffa5'}]}>
                        What's this?
                    </Text>
                </View>

            </View>

            <View style={styles.tile}>
                <View style={styles.tileheader}>
                    <FontAwesome 
                        name='lock'
                        color='gray'
                        size={20}
                        style={{
                            marginRight: 10
                        }}
                    />
                    <Text style={styles.title}>
                        Moxie
                    </Text>
                </View>   

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                    <Text style={[styles.paragraph, {color: 'white'}]}>
                        Kink Score
                    </Text>
                    <Text style={[styles.paragraph, {color: 'white'}]}>
                       8/10
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10}}>
                    <Text style={[styles.paragraph, {color: '#ffffffa5'}]}>
                        View Details
                    </Text>
                </View>

            </View>

            <View style={styles.tile}>
                <View style={styles.tileheader}>
                    <FontAwesome5 
                        name='crown'
                        color='gold'
                        size={20}
                        style={{
                            marginRight: 10
                        }}
                    />
                    <Text style={styles.title}>
                        Challenges
                    </Text>
                </View>   

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                        <Text style={[styles.paragraph, {color: 'white'}]}>
                            60 Day Marathon
                        </Text>
                        <FontAwesome5 
                            name='check'
                            color='green'
                            size={15}
                        />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                        <Text style={[styles.paragraph, {color: 'white'}]}>
                            30 Day Marathon
                        </Text>
                        <FontAwesome5 
                            name='check'
                            color='green'
                            size={15}
                        />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                        <Text style={[styles.paragraph, {color: 'white'}]}>
                            Blowjays for Days
                        </Text>
                        <FontAwesome5 
                            name='check'
                            color='green'
                            size={15}
                        />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                        <Text style={[styles.paragraph, {color: 'white'}]}>
                            Rope Bunny
                        </Text>
                        <FontAwesome5 
                            name='check'
                            color='green'
                            size={15}
                        />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10}}>
                    <Text style={[styles.paragraph, {color: '#ffffffa5'}]}>
                        View All
                    </Text>
                </View>

            </View>

            
        </View>
        </ScrollView>
    );
 }

 const styles = StyleSheet.create ({
    container: {
        flex: 1,
        //backgroundColor: '#2b292ba5'
    },
    header: {
        alignItems: 'center'
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
    },
    paragraph: {
        fontSize: 16,
        marginHorizontal: 5,
    },
    mood: {
        flexDirection: 'row',
        margin: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        paddingBottom: 10,
    },
    tile: {
        backgroundColor: '#363636a5',
        borderRadius: 16,
        margin: 10,
        //height: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    tileheader: {
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 0.3,
        paddingBottom: 10,
    },
    loveiconbox: {
        borderWidth: 0.5,
        borderColor: 'white',
        borderRadius: 30,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        marginRight: 20,
    },
    loveicon: {
        
    },
 });

 export default PartnerInfo;