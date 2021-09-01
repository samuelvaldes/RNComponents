import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/interfaces';
interface Props {
    menuItem: MenuItem;
}

export default function FlatListMenuItem({menuItem} : Props) {
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(menuItem.component)}>
            <View style={{ flexDirection:'row' }}>
                <Icon name={menuItem.iconName} size={40} color='gray'/>
                <Text>{menuItem.name}</Text>
                <View style={{ flex:1 }} />
                <Icon name='chevron-forward-outline' size={40} color='gray'/>
            </View>
        </TouchableOpacity>
    )
}
