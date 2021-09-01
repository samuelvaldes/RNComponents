import React from 'react'
import { View, Text, Button, Alert } from 'react-native'

export default function AlertScreen() {

    const createAlert2Botones = () =>{
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Ask me later",
                    onPress: () => console.log("Ask me later pressed")
                  },
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
      
    }

    return (
        <View>
            <Button title={'Alert 2 botones'} onPress={createAlert2Botones}/>
        </View>
    )
}
