import { useRef } from "react";
import { Animated, Easing } from "react-native";


export default function useAnimation() {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(opacity, {toValue: 1, duration: 1000, useNativeDriver: true}).start();
        
    }

    const fadeOut = () => {
        Animated.timing(opacity, {toValue: 0, duration: 1000, useNativeDriver: true}).start();
    }

    const starMovingPosition = (initPosition: number, duration: number = 300) => {
        position.setValue(initPosition);
        Animated.timing(
            position,
            {
                toValue: 0,
                duration: duration,
                useNativeDriver: true, 
                // easing: Easing.bounce,
            }
        ).start();

    }

    return ({
        opacity,
        position,
        fadeIn,
        fadeOut,
        starMovingPosition
    })
}
