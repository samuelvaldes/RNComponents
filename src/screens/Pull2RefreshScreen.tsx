import React, { useState } from 'react'
import { View, Text, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';

export default function Pull2RefreshScreen() {
    const [refreshing, setRefreshing] = useState(false);
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
                    progressBackgroundColor={ 'purple' } //Pone el fondo del indicador de progreso
                    colors={['white','red','orange']} //Cambia los colores de la flecha que gira
                    style={{backgroundColor:'purple'}} //Esta propiedad funciona en solo iOS y cambia el color del fondo de toda la parte de arriba donde aparece el indicador de progreso
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
