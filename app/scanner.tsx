import { CameraView } from "expo-camera";
import { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";

export default function Scanner() {
  const [qrdata, setQrData] = useState("");
  const [scanned, setScanned] = useState(false);

  function handleQrScanned(data) {
    if (!scanned) {
      setScanned(true);
      setQrData(data);
      Alert.alert("Scanned QR Code", data, [{ text: "OK", onPress: () => setScanned(false) }]);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={({ data }) => handleQrScanned(data)}
      >
        <TouchableOpacity onPress={() => Alert.alert("Scanned Data", qrdata)} style={{ backgroundColor: 'white', padding: 10, borderRadius: 5, position: 'absolute', bottom: 20, alignSelf: 'center' }}>
          <Text>Show Scanned Data</Text>
        </TouchableOpacity>
      </CameraView>
    </View>
  );
}
