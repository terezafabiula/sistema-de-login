import {useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles'

export default function App() {
    const  [emailField, setEmailField] = useState<string>('') 
    const  [ passwordField, setPasswordField] = useState<string>('')

    // Função esqueci minha senha
     const handleForgotButton = () => {
        alert(emailField)
        alert(passwordField)
     }

      //função do botão entrar
    const handleLoginButton = () => {
       alert(emailField)
      alert(passwordField)
    }

      //função do botão cadastre-se
    const handleSignUpButton = () => {
      
      
    }

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/snack-icon.png')}/>
        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
        
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
          style={styles.inputField}            
          placeholder='Digite seu email'
          placeholderTextColor= '#d1d1d1'
          value={emailField}
          onChangeText={t => setEmailField(t)}
          autoCapitalize= 'none'
          keyboardType= 'email-address'

          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
          style={styles.inputField} 
          placeholder='**********' 
          placeholderTextColor= 'd1d1d1'
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          autoCapitalize= 'none'
          secureTextEntry

          />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotButton}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLoginButton}
    >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem conta?</Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Tereza Fabiula</Text>
        </View>
      </View>
    </ScrollView>
  )
}