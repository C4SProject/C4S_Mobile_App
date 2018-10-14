/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './Login';
import Splash from './Splash';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
