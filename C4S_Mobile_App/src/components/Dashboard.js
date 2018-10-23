import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import styles from '../styles/View.component.style';

export default class Dashboard extends Component {
  render() {
    return (
    	<SafeAreaView style={styles.container}>
      	<StatusBar barStyle='light-content' />
      		<View behavior='padding' style={styles.container}>
		        <View style={styles.logoContainer}>
		        	<Text>Main View</Text>
		        </View>
      		</View>
     	</SafeAreaView>
    );
  }
}