import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  };

  const handleLearnPress = () => {
    navigation.navigate('Home');
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
          source={require('../../assets/videos/SplashSaudacao.mp4')}
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
        <Animated.View style={[styles.learnButtonContainer, { opacity: fadeAnim }]}>
          <TouchableOpacity style={styles.learnButton} onPress={handleLearnPress}>
            <Text style={styles.learnButtonText}>Iniciar Aprendizado</Text>
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
  learnButtonContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  learnButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  learnButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
