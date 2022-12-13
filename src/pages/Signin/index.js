import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Signin() {
  return (
    <View style={styles.container}>

      <View style={styles.backImage}>
        <Image
          source={require('../../assets/img/back-login.png')}
          style={{ width:'100%', padding:0, margin:0 }}
          resizeMode="contain"
        />
      </View>

     

      <View style={styles.titleBox}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.text}>Insira nos campos abaixo suas credenciais de acesso.</Text>


      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
  


  },
  backImage:{
    flex: 2,
    bottom: '59%',

  },
  titleBox:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '38%',




  },
  title:{
    fontWeight: 'bold',
    fontSize: 51.2,
    color: '#014183',
  },
  text:{
    
  }
})