import React, { useContext } from 'react'
import { View, Text, Switch, Platform } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    title?: string;
    isActive: boolean;
    isHungry?: boolean;
    isHappy?: boolean;
    changeValue: (valor:boolean) => void;
}

export default function CustomSwitch({title, changeValue, isActive}:Props) {
    const {theme: { colors }} = useContext(ThemeContext);
    return (
        <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
            <Text style={{fontSize: 20, color: colors.text }}>{title}</Text>
            <Switch style={{marginBottom: 20, alignContent: 'center'}}
                trackColor={{ false: "#767577", true: colors.primary }}
                thumbColor={(Platform.OS = 'android') ? colors.primary : "#f4f3f4"}
                ios_backgroundColor={colors.background}
                onValueChange={() => changeValue(!isActive)}
                value={isActive}
            />
        </View>

    )
}
