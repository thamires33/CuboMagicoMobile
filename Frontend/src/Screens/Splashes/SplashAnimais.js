import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const videoRef = useRef(null);
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  };

  const handleRepeatPress = () => {
    setIsVideoFinished(false);
    videoRef.current.replayAsync();
  };

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const handleQuizPress = () => {
    navigation.navigate('Q2');
  };

  useEffect(() => {
    if (isVideoFinished) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [isVideoFinished]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require('../../assets/videos/animais.mp4')}
          style={styles.video}
          resizeMode="cover"
          isLooping={false}
          shouldPlay
          onPlaybackStatusUpdate={status => {
            if (status.didJustFinish) {
              handleVideoEnd();
            }
          }}
        />
      </TouchableOpacity>
      {isVideoFinished && (
        <Animated.View style={[styles.buttonContainer, { opacity: fadeAnim }]}>
          <TouchableOpacity style={styles.button} onPress={handleHomePress}>
            <Text style={styles.buttonText}>Voltar para a Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRepeatPress}>
            <Text style={styles.buttonText}>Repetir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleQuizPress}>
            <Text style={styles.buttonText}>Ir para o Quiz</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF9C4',
  },
  videoContainer: {
    width: '100%',
    height: '100%',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
