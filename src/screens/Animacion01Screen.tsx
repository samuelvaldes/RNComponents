import React, { useContext } from 'react'
import { View, StyleSheet, Animated, Button } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import useAnimation from '../hooks/useAnimation';

export default function Animacion01Screen() {
    const { fadeIn, fadeOut, opacity, position, starMovingPosition } = useAnimation();
    const {setLightTheme, setDarkTheme, theme: { colors }} = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Animated.View style={
                [
                    styles.purpleBox,
                    {
                        transform:[{ translateY: position }], 
                        opacity,
                        marginBottom: 20,
                        backgroundColor: colors.primary,
                    },
                ]
                }
            />
            <Button
                title="Fade In"
                onPress={() => { 
                    fadeIn();
                    starMovingPosition(-200, 600);
                    }
                }
            />
            <Button
                title="Fade Out"
                onPress={()=>fadeOut()}
                color='red'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    purpleBox: {
        width: 150,
        height: 150,
        backgroundColor: 'purple',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});