import React, { useContext, useState } from 'react'
import { View, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function Pull2RefreshScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const {setLightTheme, setDarkTheme, theme: { colors }} = useContext(ThemeContext);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Ya terminé');
            setRefreshing(false);
        }, 4500);
    }

    return (
        <ScrollView
            refreshControl={ 
                <RefreshControl
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset= { 50 } //Baja verticalmente el indicador de pregreso
                    progressBackgroundColor={ colors.primary } //Pone el fondo del indicador de progreso
                    colors={['white','red']} //Cambia los colores de la flecha que gira
                    style={{backgroundColor: colors.primary}} //Esta propiedad funciona en solo iOS y cambia el color del fondo de toda la parte de arriba donde aparece el indicador de progreso
                    tintColor={'white'} //Esta propiedad funciona en solo iOS y cambia el color de la flecha que gira
                />
            }
        >
            <View>
                <HeaderTitle title='Pull to Refresh Screen' />
            </View>            
        </ScrollView>

    )
}
