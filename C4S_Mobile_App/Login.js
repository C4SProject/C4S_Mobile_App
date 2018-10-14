import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, 
	TouchableWithoutFeedback, StatusBar,
	TextInput, SafeAreaView, Keyboard, 
	TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class Login extends Component {
  render() {
    return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
	      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
		      <View style={styles.logoContainer}>
		        <View style={styles.logoContainer}>
		        	<View style={styles.logo}>
		        		<Text style={styles.titleLogo}>C4S</Text>	
		        	</View>
		        </View>
		        <View style={styles.infoContainer}>
		        	<TextInput style={styles.input} 
			        	placeholder="Enter username/email" 
			        	placeholderTextColor='gray'
			        	keyboardType='email-address'
			        	returnKeyType='next' 
			        	autoCorrect={false}
			        	onSubmitEditing={()=>this.refs.txtPassword.focus()}
		        	/>
		        	<TextInput style={styles.input} 
			        	placeholder="Password" 
			        	placeholderTextColor='gray'
			        	secureTextEntry={true}
			        	returnKeyType='go'
			        	autoCorrect={false}
			        	ref={"txtPassword"} 
		        	/>
		        	<TouchableOpacity style={styles.buttonContainer}>
		        		<Text style={styles.buttonTitle}>Login</Text>	
		        	</TouchableOpacity>
		        </View>
		      </View>
	      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
     </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    flexDirection: 'column',
    backgroundColor: 'gray',
  },
  logoContainer: {
  	flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  logo: {
  	width: 128,
    height: 56,
    backgroundColor: 'red',
  },
  titleLogo: {
    fontSize: 32,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    margin: 10,
    fontWeight: 'bold'
  },
  infoContainer: {
  	position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
    backgroundColor: 'gray',
  },
  input: {
  	height: 40,
  	backgroundColor: 'white',
  	color: 'black',
  	margin: 10,
  	padding: 5,
  },
  buttonContainer: {
  	height: 40,
  	alignItems: 'center',
    justifyContent: 'center',
  	backgroundColor: 'yellow',
  	margin: 10,
  },
  buttonTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
});
