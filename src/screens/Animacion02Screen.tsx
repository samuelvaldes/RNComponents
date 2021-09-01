import React, { useRef } from 'react'
import { View, StyleSheet, PanResponder, Animated } from 'react-native'

export default function Animacion01Screen() {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        }
      ], { useNativeDriver: false }),
      onPanResponderRelease: () => {
        Animated.spring(
          pan, // Auto-multiplexed
          {
            toValue: { x: 0, y: 0 }, 
            useNativeDriver: false,
          } // Back to zero
        ).start();
      },
    });

    return (
        <View style={styles.container}>
            <Animated.View 
                {...panResponder.panHandlers}
                style={[pan.getTranslateTransform(), styles.purpleBox]}>
            </Animated.View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150,
        backgroundColor: '#84d3f5'
    }
});