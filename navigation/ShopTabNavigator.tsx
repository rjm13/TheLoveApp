import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';

import Plugs from '../screens/ShopScreens/Plugs';
import ShopScreen from '../screens/ShopScreen';

const Tab = createMaterialTopTabNavigator();

export default function ShopTabNavigator() {
  return (

    <Tab.Navigator
        screenOptions={{ 
            width: Dimensions.get('window').width,
            
        }}
        lazy={true}
        swipeEnabled={false}
        tabBarOptions={{
            labelStyle: { 
                fontSize: 14,
                textTransform: 'capitalize',
                backgroundColor: 'transparent',
                borderColor: 'white',
                borderWidth: 0.2,
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 16,
                margin: 0,
            },
            indicatorStyle: { backgroundColor: 'transparent'},
            style: {
                backgroundColor: 'transparent',
            }
            }}
            
            
    >

        <Tab.Screen 
            name="All" 
            component={ShopScreen}
            options={{
                
            }}
        />

        <Tab.Screen 
            name="Plugs" 
            component={Plugs}
            options={{
                
            }}
        />

    </Tab.Navigator>
  );
}