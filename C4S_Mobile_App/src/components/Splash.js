import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import styles from '../styles/View.component.style';

export default class Login extends Component {
  render() {
    return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View behavior='padding' style={styles.container}>
		        <View style={styles.logoContainer}>
		        	<View style={styles.logo}>
		        		<Text style={styles.titleLogo}>C4S</Text>	
		        	</View>
		        </View>
      </View>
     </SafeAreaView>
    );
  }
}
