import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { MenuItem } from '../interfaces/interfaces';
import { styles } from '../theme/theme';
import { ItemSeparator } from './ItemSeparator';
interface Props {
    menuItem: MenuItem;
}

export default function FlatListMenuItem({menuItem} : Props) {
    
    const navigation = useNavigation();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <TouchableOpacity onPress={() => navigation.navigate(menuItem.component)}>
            <View style={{ flexDirection:'row' }}>
                <Icon name={menuItem.iconName} size={40} color={colors.primary}/>
                <Text style={{
                    ...styles.itemText,
                    color: colors.text,
                }}>
                    {'  ' + menuItem.name}</Text>
                <View style={{ flex:1 }} />
                <Icon name='chevron-forward-outline' size={40} color={colors.primary}/>
            </View>
        </TouchableOpacity>
    )
}
