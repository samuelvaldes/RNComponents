import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/theme'

interface Props {
    title: string;
}

export default function HeaderTitle({title}:Props) {
    const { top } = useSafeAreaInsets();
    return (
        <View style={ { marginTop: top + 20 } }>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
