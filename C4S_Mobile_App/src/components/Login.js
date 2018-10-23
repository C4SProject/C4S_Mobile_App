import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, 
	TouchableWithoutFeedback, StatusBar,
	TextInput, SafeAreaView, Keyboard, 
	TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import styles from '../styles/View.component.style';

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
		        	<TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')} style={styles.buttonContainer}>
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
