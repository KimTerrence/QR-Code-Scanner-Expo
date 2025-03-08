import React from "react";
import { Text, TextInput, View } from "react-native";
import QRCode from 'react-native-qrcode-svg';



export default function Generator(){

    var data = "22-30180"
    return(
        <View style={{flex:1, alignItems : "center", justifyContent:"center", gap: 20,}}>
            <Text style={{fontSize: 20,}}>Kim Terrence S. Quines</Text>
            <Text>22-3018</Text>
            <View style={{}}>
                <QRCode value={data} size={300} />
            </View>
        </View>

    )
}