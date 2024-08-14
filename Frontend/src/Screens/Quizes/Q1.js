import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function QuizScreen() {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    {
      question: 'Qual é o animal da imagem?',
      options: [
        { image: require('../../assets/cat.jpg'), isCorrect: true },
        { image: require('../../assets/dog.jpg'), isCorrect: false },
        { image: require('../../assets/bird.jpg'), isCorrect: false },
        { image: require('../../assets/fish.jpg'), isCorrect: false },
      ]
    },
    // Adicione mais perguntas aqui
  ];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <View style={styles.container}>
      {questionIndex < questions.length ? (
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{questions[questionIndex].question}</Text>
          <View style={styles.optionsContainer}>
            {questions[questionIndex].options.map((option, index) => (
              <TouchableOpacity key={index} onPress={() => handleAnswer(option.isCorrect)}>
                <Image source={option.image} style={styles.optionImage} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <Text style={styles.score}>Pontuação: {score}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  questionContainer: {
    alignItems: 'center',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionImage: {
    width: 100,
    height: 100,
    margin: 10,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
