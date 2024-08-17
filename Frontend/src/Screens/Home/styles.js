import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  backgroundShapes: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 0, // Shapes devem estar atrás de todos os outros elementos
  },
  shape1: {
    position: 'absolute',
    width: 1500,
    height: 500,
    backgroundColor: '#AEDFF7',
    borderBottomRightRadius: 750,
    top: -100, // Ajustado para garantir visibilidade
    left: -250,
    opacity: 0.5,
    zIndex: -1, // Garante que o shape1 está atrás dos outros elementos
  },
  shape2: {
    position: 'absolute',
    width: 1000,
    height: 500,
    backgroundColor: '#B2EBF2',
    borderBottomLeftRadius: 1000,
    top: 250,
    left: 0,
    opacity: 0.5,
    zIndex: -1, // Garante que o shape2 está atrás dos outros elementos
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    zIndex: 1, // Deve estar acima dos shapes
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
    marginTop: 100,
    zIndex: 1, // Deve estar acima dos shapes
  },
  webview: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2, // Deve estar acima dos shapes e do logo
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    zIndex: 3, // Deve estar acima da WebView
  },
  taskBox: {
    backgroundColor: '#ADD8E6',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 150,
    height: 150,
    marginBottom: 250,
    zIndex: 4, // Deve estar acima da WebView e da taskContainer
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff', // Cor de fundo da barra de navegação
    position: 'absolute', // Fixar na parte inferior
    bottom: 0, // Alinhar na parte inferior
    left: 0,
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default styles;
