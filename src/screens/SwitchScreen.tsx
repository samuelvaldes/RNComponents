import React, { useContext } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import CustomSwitch from "../components/CustomSwitch";
import HeaderTitle from "../components/HeaderTitle";
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function SwitchScreen() {
    const {theme: { colors }} = useContext(ThemeContext);
    const [state, setstate] = useState({
        isActive: false,
        isHungry: false,
        isHappy: false
    })

    const changeVal = (campo:string, valor:boolean) => {
        setstate({
            ...state,
            [campo]:valor,
        });

    }

    return (
        <View style={styles.container}>
            <HeaderTitle title={'Switches'}/>
            <CustomSwitch title={'Is Active'} isActive={state.isActive} changeValue={(valor) => changeVal('isActive',valor)}/>
            <CustomSwitch title={'Is Hungry'} isActive={state.isHungry} changeValue={(valor) => changeVal('isHungry',valor)}/>
            <CustomSwitch title={'Is Happy'} isActive={state.isHappy} changeValue={(valor) => changeVal('isHappy',valor)}/>
            <Text style={{...styles.switchText, color: colors.text }}>
                { JSON.stringify(state, null, 5) }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    switchText: {
        fontSize: 25,
    },
  });