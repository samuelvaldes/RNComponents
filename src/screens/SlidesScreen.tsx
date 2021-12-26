import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const {height: screenHeight, width: screenWidth} = Dimensions.get("window");

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

interface Props extends StackScreenProps <any,any>{

}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export default function SlidesScreen({navigation}:Props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [ultimaPagina, setUltimaPagina] = useState(false);
    const {theme: { colors }} = useContext(ThemeContext);
    //const navigation = useNavigation();

    const renderItem = (item:Slide) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />
                <Text 
                    style={[styles.title,{color: colors.text}]}
                >
                    {item.title}
                </Text>
                <Text 
                    style={[styles.subtitle, {color: colors.text}]}
                >
                    {item.desc}
                </Text>
            </View>
            )
    }

    return (
        <SafeAreaView
            style={{
                flex:1,
                paddingTop: 50,
            }}
        >
            <Carousel
              //ref={(c) => { this._carousel = c; }}
              data={items}
              renderItem={({item})=>renderItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout={"default"}
              onSnapToItem={(index) => {
                  setActiveIndex(index);
                  setUltimaPagina(false);
                  if (index == (items.length-1)){
                      setUltimaPagina(true);
                  }
              }}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 20,
                        backgroundColor: colors.background,
                    }}
                />

                { ultimaPagina &&
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            backgroundColor: colors.background,
                            width: 140,
                            height:50,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        activeOpacity={0.9}
                        onPress={() => {
                            navigation.navigate('HomeScreen');
                        }}
                    >

                        <Text
                            style={{
                                fontSize: 20,    
                                color: colors.primary,
                            }}
                        >
                            Enter
                        </Text>
                        <Icon
                            name='chevron-forward-outline'
                            size={20}
                            color={colors.primary}
                        />
                    </TouchableOpacity>
                }

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6',
    },
    subtitle:{
        fontSize: 16,
    },
});