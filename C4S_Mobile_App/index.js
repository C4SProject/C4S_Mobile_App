/** @format */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import Splash from './src/components/Splash';
import Navigation from './src/components/Navigation';
import {name as appName} from './app.json';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = { currentScreen: 'Splash'};
		setTimeout(()=>{
			this.setState({ currentScreen: 'Navigation' })
		}, 2000)
	}
	render() {
		const { currentScreen } = this.state
		let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Navigation />
		return mainScreen
	}
}

AppRegistry.registerComponent(appName, () => Main);
