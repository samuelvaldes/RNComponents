import React, { useContext, useState } from 'react'
import { View, Text, Button, Modal, TextInput } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/theme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function ModalScreen() {
    const [isVisible, setIsVisible] = useState(false);
    const [texto, setTexto] = useState('');
    const { theme: { colors }} = useContext(ThemeContext);


    return (
        <View style={{
            ...styles.globalMargin,
            }}
        >
            <HeaderTitle title="Modal Screen"/>
            <Button title="Open" onPress={()=>setIsVisible(true)}/>

            <Modal 
                animationType='slide'
                visible = {isVisible}
            >
                <View style={{
                    flex:1,
                    backgroundColor: colors.background,
                }}>
                    <View style={{
                        flex:1,
                        backgroundColor: colors.background,
                        justifyContent: 'space-evenly',
                    }}>
                        <HeaderTitle title='Configuración'/>
                        <Text style={{
                            fontSize:15,
                            fontWeight:'bold',
                            color: colors.text, 
                         }}>
                            Por favor Ingrese Configuración
                        </Text>
                        <TextInput 
                            placeholderTextColor={colors.text}
                            placeholder='Ingresa texto' 
                            onChangeText={(value)=>setTexto(value)}
                            style={{
                                fontSize: 20,
                                borderColor: colors.primary,
                                borderWidth: 2, 
                                color: colors.text, 
                                backgroundColor: colors.background,
                             }}
                        />
                        <Button 
                            title='cerrar' 
                            onPress={
                                () => {
                                    console.log(texto);
                                    setIsVisible(false)
                                }
                            }
                        />

                    </View>
                </View>

            </Modal>
        </View>
    )
}
