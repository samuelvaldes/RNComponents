import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Animacion01Screen from '../screens/Animacion01Screen';
import Animacion02Screen from '../screens/Animacion02Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import InputTextScreen from '../screens/InputTextScreen';
import Pull2RefreshScreen from '../screens/Pull2RefreshScreen';
import SectionListScreen from '../screens/SectionListScreen';

export type RootStackParamList = {
    HomeScreen: undefined;
    Animacion01Screen: undefined;
    Animacion02Screen: undefined;    
    SwitchScreen: undefined;
    AlertScreen: undefined;
    InputTextScreen: undefined;
    Pull2RefreshScreen:undefined;
    SectionListScreen: undefined;
}
const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
    return (
        <Stack.Navigator 
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="Animacion01Screen" component={Animacion01Screen}/>
            <Stack.Screen name="Animacion02Screen" component={Animacion02Screen}/>
            <Stack.Screen name="SwitchScreen" component={SwitchScreen}/>
            <Stack.Screen name="AlertScreen" component={AlertScreen}/>
            <Stack.Screen name="InputTextScreen" component={InputTextScreen}/>
            <Stack.Screen name="Pull2RefreshScreen" component={Pull2RefreshScreen}/>
            <Stack.Screen name="SectionListScreen" component={SectionListScreen}/>
            
        </Stack.Navigator>
    )
}
