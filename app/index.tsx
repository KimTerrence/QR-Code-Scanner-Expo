import { Link, router } from "expo-router";
import {CameraView, CameraType, useCameraPermissions } from 'expo-camera'
import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Index(){

  const[cameraPermission, requestCameraPermission] = useCameraPermissions();

//-----open camera function
  function openScanner(){ 

    if(!cameraPermission){
        alert("loding peerminsin")
    }else if(!cameraPermission.granted){
      requestCameraPermission();
    }else{
      router.replace('/scanner')
    }
    
  }

//-----Open generator funtion

  function openGenerator(){
    router.replace('/generator')
  }



  return(
    <View style={styles.con}>
      <TouchableOpacity onPress={openScanner} style={styles.button}>
        <Text style={styles.xl}>Open Scanner</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openGenerator}>
        <Text style={styles.xl}>Generate Qr</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  con :{
    flex: 1,
    backgroundColor: "aliceblue",  
    alignItems: "center",
    justifyContent: "center",
  },
  xl : {
    fontSize: 20,
  },
  button : {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor : "blue",

  }
})