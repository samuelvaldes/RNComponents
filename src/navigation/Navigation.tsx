import React, { useContext } from 'react'
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeContext } from '../context/themeContext/ThemeContext';

import HomeScreen from '../screens/HomeScreen';
import Animacion01Screen from '../screens/Animacion01Screen';
import Animacion02Screen from '../screens/Animacion02Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import InputTextScreen from '../screens/InputTextScreen';
import Pull2RefreshScreen from '../screens/Pull2RefreshScreen';
import SectionListScreen from '../screens/SectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfinitScroll from '../screens/InfinitScroll';
import SlidesScreen from '../screens/SlidesScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';


export type RootStackParamList = {
    HomeScreen: undefined;
    Animacion01Screen: undefined;
    Animacion02Screen: undefined;    
    SwitchScreen: undefined;
    AlertScreen: undefined;
    InputTextScreen: undefined;
    Pull2RefreshScreen:undefined;
    SectionListScreen: undefined;
    ModalScreen: undefined;
    InfinitScroll: undefined;
    SlidesScreen: undefined;
    ChangeThemeScreen: undefined;
}
const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
    
    const { theme } = useContext(ThemeContext);

    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.colors.background,}}
        >
            <NavigationContainer
            theme = { theme }
            >
            <Stack.Navigator 
                initialRouteName="HomeScreen"
                screenOptions={{
                    // headerShown: false,
                    cardStyle: {
                        //backgroundColor: 'white'
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
                <Stack.Screen name="ModalScreen" component={ModalScreen}/>
                <Stack.Screen name="InfinitScroll" component={InfinitScroll}/>
                <Stack.Screen name="SlidesScreen" component={SlidesScreen}/>
                <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen}/>
                            
            </Stack.Navigator>
            </NavigationContainer>
        </View>

    )
}
