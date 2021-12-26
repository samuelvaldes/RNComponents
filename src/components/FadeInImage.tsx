import React, { useState } from 'react'
import { View, Animated, ActivityIndicator, ImageStyle, StyleProp } from 'react-native'
import useAnimation from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export default function FadeInImage({ uri, style } : Props) {
    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View 
            style={{
                justifyContent: 'center',
                alignItems:'center'}}
        >
            {
                isLoading &&
                <ActivityIndicator
                    style={{position: 'absolute'}}
                    size={50}
                    color="black"
                />
            }
            <Animated.Image 
                source={{ uri }}
                onLoadEnd={ finishLoading }
                style={{
                    ...style as any,
                    opacity
                }}
            />
            
        </View>
    )
}
