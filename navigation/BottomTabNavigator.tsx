import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Spice from '../screens/Spice';
import Me from '../screens/Me';
import Bond from '../screens/Bond';
import Shop from '../screens/ShopScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      //initialRouteName="Spice"
      tabBarOptions={{ 
        activeTintColor: 'gold',
        style: {
          backgroundColor: '#2b292b',
          height: 60,
          paddingBottom: 4
      }
        }}>
        <BottomTab.Screen
        name="Me"
        component={MeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Spice"
        component={SpiceNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="pepper-hot" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Bond"
        component={BondNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="hand-holding-heart" color={color} />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string }) {
  return <FontAwesome5 size={25} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const SpiceStack = createStackNavigator<TabOneParamList>();

function SpiceNavigator() {
  return (
    <SpiceStack.Navigator>
      <SpiceStack.Screen
        name="Spice"
        component={Spice}
        options={{ 
          headerShown: false,
          headerTitle: 'Shop',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerRight: () => (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
                        }}
            >
                <FontAwesome5.Button 
                    name='music'
                    size={20}
                    backgroundColor='transparent'
                    style={{ paddingHorizontal: 20 }}
                    onPress={() => alert('Link to sexy Spotify Playlist')}
                />
                
            </View>
        ), 
        }}
      />
    </SpiceStack.Navigator>
  );
}

const ShopStack = createStackNavigator<TabTwoParamList>();

function ShopNavigator() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name="Shop"
        component={Shop}
        options={{ 
          headerRight: () => (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
                        }}
            >
                <FontAwesome5.Button 
                    name='shopping-cart'
                    size={20}
                    backgroundColor='transparent'
                    style={{ paddingHorizontal: 20 }}
                    //onPress={() => { navigation.navigate('SearchScreen') }}
                />
                <FontAwesome5.Button 
                    name='ellipsis-v'
                    size={20}
                    backgroundColor='transparent'
                    style={{ paddingHorizontal: 20 }}
                    //onPress={() => { navigation.navigate('SearchScreen') }}
                />
                
            </View>
        ),   
          headerTitle: null,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitleStyle: {
              fontSize: 16,
          },
           }}
      />
    </ShopStack.Navigator>
  );
}

const MeStack = createStackNavigator<TabTwoParamList>();

function MeNavigator() {
  return (
    <MeStack.Navigator>
      <MeStack.Screen
        name="Me"
        component={Me}
        options={{ 
          headerTitle: 'My Profile' ,
          headerStyle: {
            backgroundColor: '#2b292b',
          },
          headerTitleStyle: {
              fontSize: 16,
          },
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </MeStack.Navigator>
  );
}

const BondStack = createStackNavigator<TabTwoParamList>();

function BondNavigator() {
  return (
    <BondStack.Navigator>
      <BondStack.Screen
        name="Bond"
        component={Bond}
        options={{ 
          headerTitle: 'Bond',
          headerStyle: {
            backgroundColor: '#2b292b',
          },
          headerTitleStyle: {
              fontSize: 16,
          },
          headerTitleAlign: 'center',
        }}
      />
    </BondStack.Navigator>
  );
}