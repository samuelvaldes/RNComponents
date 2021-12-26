import React, { useContext, useState } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native';
import FadeInImage from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function InfinitScroll() {
    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);
    const {setLightTheme, setDarkTheme, theme: { colors }} = useContext(ThemeContext);
    const loadMore = () => {
        let nvos:number[] = [];
        for (let i:number = 0; i<=5; i++) {
            nvos[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...nvos]);
        }, 1500);
    }

    const renderiza = (item:number) => {
        return(
                // <Image
                //     source = {{ uri: `https://picsum.photos/id/${item}/500/400` }}
                //     style = {{
                //         width: '100%',
                //         height: 400,
                //     }}
                // />
                <FadeInImage 
                    uri={`https://picsum.photos/id/${item}/1024/1024`}
                    style={{width:"100%", height: 400}}
                />
        );
    }

    return (
        <View style={{flex:1,}}>
            
            <FlatList
                data={numbers}
                keyExtractor={ (item) => item.toString()}
                renderItem={ ({item}) => renderiza(item) }

                ListHeaderComponent={ () => (
                    <View style={{marginHorizontal: 20}}>
                        <HeaderTitle title='InfinitScroll'/>                         
                    </View>
                    )
                }

                onEndReached={ loadMore }
                onEndReachedThreshold={ 0.5 }

                ListFooterComponent={
                    <View style={{
                        height:50, 
                        width:'100%', 
                        justifyContent:'center', 
                        alignItems:'center'
                    }}>
                        <ActivityIndicator size={50} color={colors.primary}/>
                    </View>
                }
            />

        </View>
    )
}
