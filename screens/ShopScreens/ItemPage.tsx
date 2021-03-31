import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Carousel from 'react-native-snap-carousel';

const data = [
    {
        id: '2',
        image: {uri: 'https://tabooless.net/wp-content/uploads/2018/07/dldldldl-1024x591.png'}

    },
    {
        id: '1',
        image: {uri: 'https://static2.nordic.pictures/4251800-thickbox_default/lucent-jewel-buttplug.jpg'}

    },
    {
        id: '3',
        image: {uri: 'https://pyxis.nymag.com/v1/imgs/c80/0e6/2cc0b79549c10ad47fc18446b0f054c9cc-dotd-vibrator.rsquare.w700.jpg'}

    },
    {
        id: '2',
        image: {uri: 'https://xtoysphil.com/wp-content/uploads/2019/08/fleshlight-non-motor-1-600x600.jpg'}

    },
]

const Item =({image}) => {

    return (
        <Image 
            source={image}
            style={{
                height: 300,
                width: Dimensions.get('window').width,
                resizeMode: 'cover',
                borderRadius: 15,
                marginVertical: 20,
            }}
        />
    );
}

const ItemPage = () => {

    const renderItem = ({ item }) => (
        <Item 
            image={item.image}
        />
      );

    return (
        <View style={styles.container}>
            <ScrollView>
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={360}
              layout={'tinder'} 
              layoutCardOffset={10}
            />

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
                <View>
                    <Text style={styles.title}>
                        Package of Dildos (12 pck)
                    </Text>
                    <Text style={styles.subtext}>
                        ExtacyCentral
                    </Text>
                </View>
                <View>
                    <Text style={[styles.price, {width: '100%'}]}>
                        $26.50
                    </Text>
                </View>
            </View>

            <View>
                <View style={{ flexDirection: 'row', margin: 20, justifyContent: 'space-around', alignItems: 'flex-end'}}>
                    
                    <View>
                        <SimpleLineIcons 
                            name='speech'
                            color='gold'
                            size={28}
                            style={{
                                opacity: .8,
                                alignSelf: 'center'
                            }}
                        />
                        <Text style={styles.icontext}>
                            Review
                        </Text>
                    </View>
                    <View>
                        <SimpleLineIcons 
                            name='present'
                            color='gold'
                            size={28}
                            style={{
                                opacity: .8,
                                alignSelf: 'center'
                            }}
                        />
                        <Text style={styles.icontext}>
                            Wishlist
                        </Text>
                    </View>
                    <View>
                        <Octicons 
                            name='package'
                            color='gold'
                            size={30}
                            style={{
                                opacity: .8,
                                alignSelf: 'center'
                            }}
                        />
                        <Text style={styles.icontext}>
                            Purchase
                        </Text>
                    </View>
                </View>
            </View>

            <View>

                <View style={styles.titlebox}>
                    <Text style={styles.title}>
                        Product Description
                    </Text>
                </View>
                

                <View style={styles.tile}>

                    <Text style={styles.description}>
                        This is a product description. It should probablu include some bullet points 
                        somewhere? Or be broken up into single sentance points some other way.
                    </Text>
                    <Text style={styles.description}>
                        This is a product description. It should probablu include some bullet points 
                        somewhere? Or be broken up into single sentance points some other way.
                    </Text>

                </View>


                <View style={styles.titlebox}>
                    <Text style={styles.title}>
                        Specifications
                    </Text>
                </View>

                <View style={styles.tile}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.description}>
                            Dimensions
                        </Text>
                        <Text style={styles.description}>
                            L14" x W16" x H4'6"
                        </Text> 
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.description}>
                            Weight
                        </Text>
                        <Text style={styles.description}>
                            200 lbs
                        </Text> 
                    </View>

                </View>

                <View style={styles.titlebox}>
                    <Text style={styles.title}>
                        Reviews
                    </Text>
                </View>

                <View style={styles.tile}>

                    <Text style={styles.description}>
                        Blah blah blah.
                    </Text>
                    <Text style={styles.description}>
                        Yadda yadda yadda
                    </Text>

                </View>

                <View style={{ alignItems: 'center', margin: 20}}>

                    <Text style={styles.subtext}>
                        Report a problem
                    </Text>

                </View>
            </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    tile: {
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#363636a5',
        borderRadius: 15,
        padding: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        flexWrap: 'wrap',
    },
    titlebox: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    price: {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold'
    },
    subtext: {
        fontSize: 12,
        color: '#ffffffa5',
    },
    description: {
        fontSize: 16,
        color: '#ffffffa5',
        marginBottom: 10,
    },
    icontext: {
        fontSize: 12,
        color: 'gold',
        opacity: .5,
        marginTop: 5,
    },
});

export default ItemPage;