import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    position: 'relative',
  },
  backgroundShapes: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: 0,
  },
  shape1: {
    position: 'absolute',
    width: width * 1.5,
    height: height * 0.5,
    backgroundColor: '#AEDFF7',
    borderBottomRightRadius: width * 0.75,
    top: 0,
    left: -width * 0.25,
  },
  shape2: {
    position: 'absolute',
    width: width,
    height: height * 0.5,
    backgroundColor: '#B2EBF2',
    borderBottomLeftRadius: width,
    top: height * 0.25,
    right: 0,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '80%',
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  forgotPassword: {
    color: '#007BFF',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FFC107',
    borderRadius: 10,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  orContinueWith: {
    marginBottom: 20,
    color: '#757575',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
});

export default styles;
