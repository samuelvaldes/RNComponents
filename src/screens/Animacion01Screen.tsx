import React, { useRef } from 'react'
import { View, StyleSheet, Animated, Button, Easing } from 'react-native'
import useAnimation from '../hooks/useAnimation';

export default function Animacion01Screen() {
    const { fadeIn, fadeOut, opacity, position, starMovingPosition } = useAnimation();
    return (
        <View style={styles.container}>
            <Animated.View style={
                [
                    styles.purpleBox,
                    {
                        transform:[{ translateY: position }], 
                        opacity,
                        marginBottom: 20,
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
                onPress={fadeOut}
                color='red'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    purpleBox: {
        width: 150,
        height: 150,
        backgroundColor: 'purple'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});