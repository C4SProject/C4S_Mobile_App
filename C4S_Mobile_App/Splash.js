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
		        <View style={styles.logoContainer}>
		        	<View style={styles.logo}>
		        		<Text style={styles.titleLogo}>C4S</Text>	
		        	</View>
		        </View>
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
});
