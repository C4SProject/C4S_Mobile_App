import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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