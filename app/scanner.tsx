import { CameraView } from "expo-camera";
import { Text, TouchableOpacity, View } from "react-native";


export default function Scanner(){
    return(
        <View style={{flex:1,}}>
            <CameraView  style={{flex:1,}}
                barcodeScannerSettings={{
                barcodeTypes: ["qr"],
            }} onBarcodeScanned={({data}) => {alert(data)}}>
                
                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>

            </CameraView>
        </View>
    )
}