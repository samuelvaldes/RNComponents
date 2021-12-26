
import React, { useContext } from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, 
         Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { formulario } from '../hooks/useFormulario';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function InputTextScreen() {

  const {theme: { colors }} = useContext(ThemeContext);

  const { name, email, phone, isSuscribed, onChange} = formulario({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false
  });

    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <SafeAreaView style={{marginTop:550}}>
          <TextInput
            placeholderTextColor={colors.text}
            style={[
              styles.input, 
              { borderColor: colors.primary,
                borderWidth: 2, 
                color: colors.text, 
                backgroundColor: colors.background,
              }
            ]}
            autoCorrect= {false}
            placeholder= {'name'}
            autoCapitalize={'words'}
            onChangeText={(value) => onChange('name', value)}
          />
          
          <TextInput
            placeholderTextColor={colors.text}
            style={[
              styles.input, 
              { borderColor: colors.primary,
                borderWidth: 2, 
                color: colors.text, 
                backgroundColor: colors.background,
              }
            ]}
            keyboardType={'email-address'}
            placeholder={'email'}
            autoCorrect= {false}
            onChangeText={(value) => onChange('email', value)}
          />

          <TextInput
            placeholderTextColor={colors.text}
            style={[
              styles.input, 
              { borderColor: colors.primary,
                borderWidth: 2, 
                color: colors.text, 
                backgroundColor: colors.background,
              }
            ]}
            keyboardType={'phone-pad'}
            placeholder={'phone number'}
            autoCorrect= {false}
            onChangeText={(value) => onChange('phone', value)}
          />
          <View style={{ flex:1, flexDirection:'row'}}>
            <Text
              style={{fontSize:40, color: colors.text,}}
            >
                Suscribirme
            </Text>
            <CustomSwitch isActive={isSuscribed} changeValue={(valor) => onChange('isSuscribed', valor)}/>            
          </View>


        </SafeAreaView>

      
      </TouchableWithoutFeedback>
      </ScrollView>
      </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    input: {
      fontSize: 20,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });