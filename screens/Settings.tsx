import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Switch } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native'

const Settings = ({navigation}) => {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={styles.container}>
            <View style={styles.optionslist}>

                <TouchableOpacity onPress={ () => navigation.navigate('EditProfile')}>
                <View style={styles.optionsitem}>
                    <Text style={styles.paragraph}>
                        Edit Profile
                    </Text>
                    <FontAwesome5 
                        name='angle-right'
                        color='#fff'
                        size={25}
                    />
                </View>
                </TouchableOpacity>

                <View style={styles.optionsitem}>
                    <Text style={styles.paragraph}>
                        Notifications
                    </Text>
                    <FontAwesome5 
                        name='angle-right'
                        color='#fff'
                        size={25}
                    />
                </View>

                <View style={[
                    styles.optionsitem, 
                    {marginTop: 40, paddingTop: 40, borderTopWidth: 1, borderColor: 'gray'} ]}>
                    <Text style={styles.paragraph}>
                        Notifications
                    </Text>

                    <ToggleSwitch
                        isOn={isSwitchOn}
                        onColor="#524d11"
                        thumbOnStyle={{
                            backgroundColor: 'gold'
                        }}
                        offColor="gray"
                        size="medium"
                        onToggle={onToggleSwitch}
                    />
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      justifyContent: 'space-between',
      backgroundColor: '#161516'
    },
    header: {
        color: '#fff'
    },
    optionslist: {

    },
    optionsitem: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 20,
    },
    paragraph: {
        fontSize: 16,
        color: '#fff'
    },
});

export default Settings;