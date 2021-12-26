import React, { useContext } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function ChangeThemeScreen() {

    const {setLightTheme, setDarkTheme, theme:{ colors }} = useContext(ThemeContext);
    
    return (
        <View>
            <HeaderTitle title="Change Theme Screen"/>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding:20,
            }}>
                <TouchableOpacity
                    onPress={ setLightTheme }
                    activeOpacity={0.8}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{
                        color: 'white', 
                        textAlign: 'center',
                        fontSize: 22,
                    }}
                    >
                        Light
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ setDarkTheme }
                    activeOpacity={0.8}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{
                        color: 'white', 
                        textAlign: 'center',
                        fontSize: 22,
                    }}
                    >
                        Dark
                    </Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
