import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';

const courses = [
  {
    id: '1',
    category: 'Graphic Design',
    title: 'Graphic Design Advanced',
    price: '$28',
    originalPrice: '$42',
    rating: 4.2,
    students: 7830,
    thumbnail: 'https://via.placeholder.com/80', // URL de exemplo
  },
  {
    id: '2',
    category: 'Graphic Design',
    title: 'Advertisement Design',
    price: '$42',
    originalPrice: '$61',
    rating: 3.9,
    students: 12680,
    thumbnail: 'https://via.placeholder.com/80', // URL de exemplo
  },
  {
    id: '3',
    category: 'Programming',
    title: 'Graphic Design Advanced',
    price: '$37',
    originalPrice: '$41',
    rating: 4.2,
    students: 990,
    thumbnail: 'https://via.placeholder.com/80', // URL de exemplo
  },
  {
    id: '4',
    category: 'Web Development',
    title: 'Web Developer conce..',
    price: '$56',
    originalPrice: '$71',
    rating: 4.9,
    students: 14580,
    thumbnail: 'https://via.placeholder.com/80', // URL de exemplo
  },
  {
    id: '5',
    category: 'SEO & Marketing',
    title: 'Digital Marketing Co..',
    price: '$66',
    originalPrice: '$78',
    rating: 4.8,
    students: 12480,
    thumbnail: 'https://via.placeholder.com/80', // URL de exemplo
  },
  // Adicione mais cursos aqui
];

const CourseItem = ({ course }) => (
  <View style={styles.courseItem}>
    <Image source={{ uri: course.thumbnail }} style={styles.thumbnail} />
    <View style={styles.courseInfo}>
      <Text style={styles.category}>{course.category}</Text>
      <Text style={styles.title}>{course.title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{course.price}</Text>
        <Text style={styles.originalPrice}>{course.originalPrice}</Text>
      </View>
      <Text style={styles.rating}>{course.rating} ★</Text>
      <Text style={styles.students}>{course.students} Std</Text>
    </View>
  </View>
);

const CoursesScreen = () => (
  <View style={styles.container}>
    <FlatList
      data={courses}
      renderItem={({ item }) => <CourseItem course={item} />}
      keyExtractor={(item) => item.id}
    />
  </View>
);

export default CoursesScreen;
