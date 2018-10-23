import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import styles from '../styles/View.component.style';

import Login from './Login';
import Dashboard from './Dashboard';

export default class Navigation extends Component {
  render() {
    return (
    	<AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
	Login: {
  		screen: Login,
  		navigationOptions: {
    		headerStyle: {display:"none"},
    		headerLeft: null
  		},
	},
	Dashboard: {
  		screen: Dashboard,
  		navigationOptions: {
  			title: 'C4S',
    		headerStyle: {backgroundColor: 'red'},
    		headerTintColor: 'white',
    		headerTitleStyle: {
        		fontWeight: 'bold',
      		},
    		headerLeft: null,
  		},
	},
});