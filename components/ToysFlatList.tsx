import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const data = [
    {
        id: '1',
        title: 'Dildos',
        image: {uri: 'https://tabooless.net/wp-content/uploads/2018/07/dldldldl-1024x591.png'}
        
    },
    {
        id: '2',
        title: 'Plugs',
        image: {uri: 'https://static2.nordic.pictures/4251800-thickbox_default/lucent-jewel-buttplug.jpg'}
        
    },
    {
        id: '3',
        title: 'Vibrators',
        image: {uri: 'https://pyxis.nymag.com/v1/imgs/c80/0e6/2cc0b79549c10ad47fc18446b0f054c9cc-dotd-vibrator.rsquare.w700.jpg'}
        
    },
    {
        id: '4',
        title: 'Fleshlights',
        image: {uri: 'https://xtoysphil.com/wp-content/uploads/2019/08/fleshlight-non-motor-1-600x600.jpg'}
        
    },
    {
        id: '5',
        title: 'Dildos',
        image: {uri: 'https://tabooless.net/wp-content/uploads/2018/07/dldldldl-1024x591.png'}
        
    },
    {
        id: '6',
        title: 'Plugs',
        image: {uri: 'https://static2.nordic.pictures/4251800-thickbox_default/lucent-jewel-buttplug.jpg'}
        
    },
    {
        id: '7',
        title: 'Plugs',
        image: {uri: 'https://static2.nordic.pictures/4251800-thickbox_default/lucent-jewel-buttplug.jpg'}
        
    },
]

const Item = ({title, image}) => {

    return (
        
        <View style={styles.container}>
            <View style={styles.tile}>
                <View>
                    <Image 
                        source={image}
                        style={{
                            height: 100,
                            width: 100,
                            resizeMode: 'cover',
                            borderRadius: 50,
                            marginVertical: 20,
                        }}
                    
                    />
                </View>
                <View>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </View>
            
        </View>
        
    );
}

const ToysFlatList = () => {

    const renderItem = ({ item }) => (
        <Item 
          title={item.title}
          image={item.image}
          />
      );

    return (

        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={(
                    <View style={{
                        marginVertical: 40,
                        alignItems: 'center',
                    }}>
                        <Text style={{ color: 'white'}}> 
                            Shop More
                        </Text>
                    </View>
                )

                }
                
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        //justifyContent: 'center', 
        marginTop: 20
        
        
    },
    tile: {
        //backgroundColor: '#5e5e5ea5',
        //borderRadius: 16,
        margin: 10,
        width: 150,
        height: 150,
        alignItems : 'center',
        
        
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ToysFlatList;