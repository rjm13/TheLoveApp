import React, {useState} from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const audio = [
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
    },
    { 
        id: '2',
        name: 'My Night 2nd Out',
        category: 'Public',
        highlight: 'Having fun in the car',
        audioUri: '',
        userId: 'annonymous',
        time: '5:30',
        liked: '18',
        spiceRating: 'mild'
    },
    { 
        id: '3',
        name: 'My Night 3rd Out',
        category: 'Public',
        highlight: 'Having fun in the car',
        audioUri: '',
        userId: 'annonymous',
        time: '5:30',
        liked: '112',
        spiceRating: 'spicy'
    },
    { 
        id: '4',
        name: 'My Night 3rd Out',
        category: 'Public',
        highlight: 'Having fun in the car',
        audioUri: '',
        userId: 'annonymous',
        time: '5:30',
        liked: '224',
        spiceRating: 'spicy'
    },
    { 
        id: '5',
        name: 'My Night 3rd Out',
        category: 'Public',
        highlight: 'Having fun in the car',
        audioUri: '',
        userId: 'annonymous',
        time: '5:30',
        liked: '6',
        spiceRating: 'moderate'
    },
    { 
        id: '6',
        name: 'My Night 3rd Out',
        category: 'Public',
        highlight: 'Having fun in the car',
        audioUri: '',
        userId: 'annonymous',
        time: '5:30',
        liked: '36',
        spiceRating: 'mild'
    },
]

const Item = ({name, category, highlight, audioUri, userId, time, liked, spiceRating}) => {

    const [isVisible, setIsVisible] = useState(false);

    const [isLiked, setIsLiked] = useState(false);

    const navigation = useNavigation();
    
    const onLikePress = () => {
        if ( isLiked === false ) {
            setIsLiked(true);
        }
        if ( isLiked === true ) {
            setIsLiked(false);
        }  
    };

    return (
        <TouchableWithoutFeedback onPress={() => setIsVisible(!isVisible)}>
        <View style={styles.tile}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={styles.name}>
                        {name}
                    </Text> 
                    <Text style={styles.userId}>
                        {time}  ({userId})
                    </Text> 
                </View>
                <View>
                    <View style={{ alignSelf: 'center', flexDirection: 'row', }}>
                        <FontAwesome
                            name={isLiked ? 'star' : 'star-o'}
                            size={20}
                            color={isLiked ? 'gold' : 'white'}
                            onPress={onLikePress}
                        />
                    </View>
                    <View style={{ marginTop: 2 }}>
                        <Text style={{ fontSize: 10, color: '#ffffff', textAlign: 'center'}}>
                            {liked}
                        </Text>
                    </View>
                </View>
                </View> 

                { isVisible ? (
                    <View style={styles.popupblock}>
                        <Text style={styles.paragraph}>
                            {highlight}
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between'}}>
                            <View>
                                <View style={{ flexDirection: 'row'}}>
                                    <FontAwesome5 
                                        name='pepper-hot'
                                        color={
                                            spiceRating === 'mild' ? 'green' : 
                                            spiceRating === 'moderate' ? 'orange' : 
                                            'red'
                                        }
                                        size={15}
                                        style={{ 
                                            marginHorizontal: 3
                                        }}
                                    />
                                    { spiceRating === 'moderate' ? (
                                    <FontAwesome5 
                                        name='pepper-hot'
                                        color={
                                            spiceRating === 'moderate' ? 'orange' : 
                                            'red'}
                                        size={15}
                                        style={{ 
                                            marginHorizontal: 3
                                        }}
                                    />
                                    ) : null }
                                    { spiceRating === 'spicy' ? (
                                    <FontAwesome5 
                                        name='pepper-hot'
                                        color='red'
                                        size={15}
                                        style={{ 
                                            marginHorizontal: 3
                                        }}
                                    />
                                    ) : null }
                                    { spiceRating === 'spicy' ? (
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
                                    <Text style={{ fontSize: 10, color: '#ffffff', textTransform: 'capitalize'}}>
                                        {spiceRating}
                                    </Text>
                                </View>
                            </View>

                            

                            <View style={{ alignSelf: 'flex-end'}}>
                                <TouchableOpacity onPress={() => navigation.navigate ('AudioPlay')}>
                                <Text style={styles.playbutton}>
                                    Play
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ) : false }  
        </View>
        </TouchableWithoutFeedback>
    );
  }

const AudioStoryList = () => {

    const renderItem = ({ item }) => (
        <Item 
          name={item.name}
          category={item.category}
          highlight={item.highlight}
          audioUri={item.audioUri}
          userId={item.userId}
          time={item.time}
          liked={item.liked}
          spiceRating={item.spiceRating}
          />
      );

    return (

        <View style={styles.container}>

            <FlatList 
                data={audio}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}    
                ListFooterComponent={ () => {
                    return (
                    <View style={{ height:  150, alignItems: 'center'}}>
                        <Text style={{ color: 'white', margin: 20,}}>
                            Load more
                        </Text>
                    </View>
                );

                }

                }
            />

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
       width: Dimensions.get('window').width, 
    },
    tile: {
        backgroundColor: '#383838a5',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 20,
        borderRadius: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    userId: {
        fontSize: 12,
        color: '#ffffffa5'
    },
    popupblock: {
        marginTop: 10,
    },
    paragraph: {
        color: '#ffffffa5'
    },
    playbutton: {
        borderWidth: 0.3,
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 15,
        borderColor: '#fff',
        color: '#fff',
    },

});

export default AudioStoryList;