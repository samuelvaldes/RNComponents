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
        }, 1500);
    }

    return (
        <ScrollView
            refreshControl={ 
                <RefreshControl
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                />
            }
        >
            <View>
                <HeaderTitle title='Pull to Refresh Screen' />
            </View>            
        </ScrollView>

    )
}
