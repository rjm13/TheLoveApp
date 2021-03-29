import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/IonIcons';
import {View, Text, StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Spice from '../screens/Spice';
import Me from '../screens/Me';
import Bond from '../screens/Bond';
import Shop from '../screens/ShopScreen';
import AudioPlay from '../screens/AudioPlay';

import EditProfile from '../screens/EditProfile';
import Settings from '../screens/Settings';
import Partner from '../screens/Partner';
import AudioStoryHome from '../screens/AudioStoryHome';

import ShopTabNavigator from './ShopTabNavigator';
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
          backgroundColor: '#000',
          height: 60,
          paddingBottom: 4
      }
        }}>
        <BottomTab.Screen
        name="Me"
        component={MeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user-alt" color={color} />,
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
                <FontAwesome5 
                    name='award'
                    size={20}
                    style={{ paddingHorizontal: 20 }}
                    onPress={() => alert('Link to sexy Spotify Playlist')}
                />
                
            </View>
        ), 
        }}
      />
      <SpiceStack.Screen
        name="AudioStoryHome"
        component={AudioStoryHome}
        options={{ 
          headerShown: false,
          headerTitle: null,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerRight: () => (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
                        }}
            >
                <Ionicons.Button 
                    name='md-filter'
                    size={22}
                    backgroundColor='transparent'
                    style={{ paddingHorizontal: 10 }}
                    onPress={() => alert('Link to sexy Spotify Playlist')}
                />
                <FontAwesome.Button 
                    name='star'
                    size={20}
                    backgroundColor='transparent'
                    style={{ paddingHorizontal: 10 }}
                    onPress={() => alert('Link to sexy Spotify Playlist')}
                />
                
            </View>
        ), 
        }}
      />
      <SpiceStack.Screen
        name="AudioPlay"
        component={AudioPlay}
        options={{ 
          headerShown: false,
          headerTitle: null,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerRight: () => (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
                        }}
            >
                <Ionicons.Button 
                    name='md-filter'
                    size={22}
                    backgroundColor='transparent'
                    style={{ paddingHorizontal: 10 }}
                    onPress={() => alert('Link to sexy Spotify Playlist')}
                />
                <FontAwesome.Button 
                    name='star'
                    size={20}
                    backgroundColor='transparent'
                    style={{ paddingHorizontal: 10 }}
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
          headerLeft: () => (
           <View>

           </View>
          ),
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
                    style={{ paddingHorizontal: 15 }}
                    //onPress={() => { navigation.navigate('SearchScreen') }}
                />
                <FontAwesome.Button 
                    name='navicon'
                    size={20}
                    backgroundColor='transparent'
                    style={{ paddingHorizontal: 15 }}
                    //onPress={() => { navigation.navigate('SearchScreen') }}
                />
                
            </View>
        ),   
          headerTitle: null,
          headerStyle: {
            backgroundColor: '#2b292ba5',
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
      <MeStack.Screen
        name="Settings"
        component={Settings}
        options={{ 
          headerTitle: 'App Settings' ,
          headerStyle: {
            backgroundColor: '#161516',
          },
          headerTitleStyle: {
              fontSize: 18,
          },
          headerTitleAlign: 'center',
         
        }}
      />
      <MeStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ 
          headerTitle: 'Edit Profile' ,
          headerStyle: {
            backgroundColor: '#161516',
          },
          headerTitleStyle: {
              fontSize: 18,
          },
          headerTitleAlign: 'center',
         
        }}
      />
      <MeStack.Screen
        name="Partner"
        component={Partner}
        options={{ 
          headerTitle: null ,
          headerStyle: {
            backgroundColor: '#2b292ba5',
          },
          headerTitleStyle: {
              fontSize: 18,
          },
          headerTitleAlign: 'center',
         
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
          headerShown: false     
        }}
      />
    </BondStack.Navigator>
  );
}