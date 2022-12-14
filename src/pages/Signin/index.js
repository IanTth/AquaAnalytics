import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';

export default function Signin() {
  return (
    <View style={styles.container}>
      <ScrollView>
        

     

      <View style={styles.titleBox}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.text}>  Insira nos campos abaixo suas credenciais de acesso.</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Usuário</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder='Digite seu usuário'
            styles={styles.input}
          
          />
        </View>
        <Text style={styles.inputTitle}>Senha</Text>
        <View style={styles.inputBox}>
          <TextInput
              placeholder='Sua senha'
              styles={styles.input}
          
            
            />
        </View>
      </View>
      
        
      




      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonRec}>
        <Text style={styles.buttonRecText}>Não consegue entrar?</Text>
      </TouchableOpacity>
      
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
  


  },
  backImage:{
    position: 'relative',
    flex: 2,
    bottom: '59%',

  },
  titleBox:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '45%',

  },
  title:{
    fontWeight: 'bold',
    fontSize: 51.2,
    color: '#014183',
  },
  text:{
    flex: 1,
    fontWeight: '700',
    fontSize: 17.6,
    color :'#326FAE',
    width: '60%',
    marginTop: 2,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    
  },
  button:{

    backgroundColor: '#12385D',
    width: '89%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderBottomEndRadius: 25,
    bottom: 15,
    marginLeft: '5%'


  },
  buttonText:{
    color: '#fff',
    fontWeight: '700',
    fontSize: 20.8,
  },
  buttonRec:{
    width: '60%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: '#2E6414',
    marginBottom: 50,
    marginLeft: '20%',
  },
  buttonRecText:{
    color: '#fff',
    fontWeight: '500',
    fontSize: 16

  },
  inputBox:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    height: 45,
    width: '93%',
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    
    paddingLeft: 55,
    marginBottom: 25,


  },
  inputContainer: {
    marginBottom: 30,
    marginLeft: 25
  },
  input:{
    fontSize: 19.2,
    fontWeight: '600',
  },
  inputTitle:{
    marginBottom: 5,
    color: '#2E6414',
    fontSize: 16.8,
    fontWeight: '600',


  }


})