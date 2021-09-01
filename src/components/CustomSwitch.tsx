import React from 'react'
import { View, Text, Switch, Platform } from 'react-native'

interface Props {
    title?: string;
    isActive: boolean;
    isHungry?: boolean;
    isHappy?: boolean;
    changeValue: (valor:boolean) => void;
}

export default function CustomSwitch({title, changeValue, isActive}:Props) {

    return (
        <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
            <Text style={{fontSize: 20}}>{title}</Text>
            <Switch style={{marginBottom: 20, alignContent: 'center'}}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={(Platform.OS = 'android') ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => changeValue(!isActive)}
                value={isActive}
            />
        </View>

    )
}
