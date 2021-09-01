
import React from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, 
         Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { formulario } from '../hooks/useFormulario';
import CustomSwitch from '../components/CustomSwitch';

export default function InputTextScreen() {

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
          style={styles.input}
          autoCorrect= {false}
          placeholder= {'name'}
          autoCapitalize={'words'}
          onChangeText={(value) => onChange('name', value)}
          />
          
          <TextInput
              style={styles.input}
              keyboardType={'email-address'}
              placeholder={'email'}
              autoCorrect= {false}
              onChangeText={(value) => onChange('email', value)}
          />

          <TextInput
              style={styles.input}
              keyboardType={'phone-pad'}
              placeholder={'phone number'}
              autoCorrect= {false}
              onChangeText={(value) => onChange('phone', value)}
          />
          <View style={{ flex:1, flexDirection:'row'}}>
            <Text
              style={{fontSize:40}}
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
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });