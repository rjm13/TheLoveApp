import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const Settings = () => {


    return (
        <View>
            <Text>
                Settings Screen.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      justifyContent: 'space-between',
      backgroundColor: '#2b292ba5'
      
    },
});

export default Settings;