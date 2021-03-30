import React, {useState, useEffect, useRef} from 'react';
import {Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const story = 
    {
        id: '1',
        name: 'My Night Out',
        category: 'Public',
        highlight: 'Having fun in the car. This is a story about my first time doing it in public.',
        audioUri: '',
        userId: 'annonymous',
        time: '5:30',
        liked: '1128',
        spiceRating: 'spicy'

    }

    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          let id = setInterval(() => {
            savedCallback.current();
          }, delay);
          return () => clearInterval(id);
        }, [delay]);
      }



const AudioPlay  = ({navigation}) => {

    const [sound, setSound] = useState();

    const [isPlaying, setIsPlaying] = useState(false);

    const [position, setPosition] = useState(0); //position in milliseconds

    const [slideLength, setSlideLength] = useState(0);

    function SetPosition(value) {
        setPosition(value)
    }

    async function StoryPosition (value) { 
        await sound.setPositionAsync(value);
        setPosition(value);

    }

    function millisToMinutesAndSeconds () {
        let minutes = Math.floor(position / 60000);
        let seconds = ((position % 60000) / 1000);
        return (seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
    }  


    async function PlayPause() {

        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/zelda.mp3'),
            {shouldPlay: true}
        );
        setSound(sound);

        let time = await sound.getStatusAsync();
        setSlideLength(time.durationMillis);

        if (isPlaying === false) {
            console.log('Playing Sound');
            await sound.playAsync(); 
            setIsPlaying(true);
            await sound.setPositionAsync(position);
        } 
        if (isPlaying === true) {
            await sound.pauseAsync();
            setIsPlaying (false);     
        }    
    }

    useEffect(() => {
        PlayPause();
    }, []);

    useInterval(() => {
        if (isPlaying === true && position < slideLength) {
        setPosition(position + 1000);
        }
      }, 1000);
    

    useEffect(() => {
        return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);



    return (
        <View style={styles.container}>

            <View>
               <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between', marginHorizontal: 20}}>
                    <AntDesign 
                        name='close'
                        size={20}
                        color='#fff'
                        style={{
                            margin: 20
                        }}
                        onPress={() => navigation.goBack() }
                    />
                    <FontAwesome 
                        name='star'
                        size={20}
                        color='gold'
                        style={{
                            margin: 20
                        }}
                    />
                </View>

                <View style={{ marginVertical: 20, alignItems: 'center'}}>
                    <Text style={styles.name}>
                        {story.name}
                    </Text>
                    <Text style={styles.username}>
                        {story.userId}
                    </Text>
                    <Text style={styles.highlight}>
                        {story.highlight}
                    </Text>
                    
                    <View>
                                <View style={{ flexDirection: 'row'}}>
                                    <FontAwesome5 
                                        name='pepper-hot'
                                        color={
                                            story.spiceRating === 'mild' ? 'green' : 
                                            story.spiceRating === 'moderate' ? 'orange' : 
                                            'red'
                                        }
                                        size={15}
                                        style={{ 
                                            marginHorizontal: 3
                                        }}
                                    />
                                    { story.spiceRating === 'moderate' ? (
                                    <FontAwesome5 
                                        name='pepper-hot'
                                        color={
                                            story.spiceRating === 'moderate' ? 'orange' : 
                                            'red'}
                                        size={15}
                                        style={{ 
                                            marginHorizontal: 3
                                        }}
                                    />
                                    ) : null }
                                    { story.spiceRating === 'spicy' ? (
                                    <FontAwesome5 
                                        name='pepper-hot'
                                        color='red'
                                        size={15}
                                        style={{ 
                                            marginHorizontal: 3
                                        }}
                                    />
                                    ) : null }
                                    { story.spiceRating === 'spicy' ? (
                                    <FontAwesome5 
                                        name='pepper-hot'
                                        color='red'
                                        size={15}
                                        style={{ 
                                            marginHorizontal: 3
                                        }}
                                    />
                                    ) : null }       

                                </View>
                                <View style={{ marginTop: 4,}}>
                                    <Text style={{ textAlign: 'center', fontSize: 10, color: '#ffffff', textTransform: 'capitalize'}}>
                                        {story.spiceRating}
                                    </Text>
                                </View>
                            </View>

                    <View style={{ marginTop: 100 }}>
                        <FontAwesome5 
                            name={isPlaying === true ? 'pause' : 'play'}
                            color='#ffffffa5'
                            size={50}
                            onPress={PlayPause}
                        />

                    </View>
                </View> 

            </View>

            <View style={styles.footer}>
                <View style={{ alignSelf: 'center'}}>
                    <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center', color: 'white'}}>
                        {millisToMinutesAndSeconds()}
                    </Text>
                <Slider
                    style={{width: 300, height: 40}}
                    minimumTrackTintColor="gold"
                    maximumTrackTintColor="#ffffffa5"
                    thumbTintColor='#fff'
                    //tapToSeek={true}
                    value={position}
                    step={1000}

                    minimumValue={0}
                    maximumValue={slideLength} //function set to the length of the audio file
                    onValueChange={SetPosition} //function: when slider changes, slider value = SetPosition
                    onSlidingComplete={StoryPosition}
                />
                </View>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'space-between',
        alignContent: 'space-between',
        height: Dimensions.get('window').height - 60
    },
    name: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    username: {
        color: '#ffffffa5',
        fontSize: 14,
        marginVertical: 5,
    },
    footer: {
        marginVertical: 20,
    },
    highlight: {
        marginVertical: 30, 
        marginHorizontal: 30,
        color: '#ffffffa5',
        fontSize: 15,
    },
});

export default AudioPlay;