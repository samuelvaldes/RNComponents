import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../theme/theme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { lista } from '../data/MenuItems';
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

export default function HomeScreen() {
    
    return (
        <View style={{flex:1, ...styles.globalMargin}}>
            <FlatList
                data = {lista}
                renderItem = { ( {item} ) => <FlatListMenuItem menuItem={item}/> }
                keyExtractor = { (item) => item.name }
                ListHeaderComponent = { () => <HeaderTitle title='Menú'/> }
                ItemSeparatorComponent = { () => <ItemSeparator/> }
            />
        </View>
    )
}
