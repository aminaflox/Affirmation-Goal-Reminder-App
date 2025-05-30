import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Ionicons name="home-outline" size={30} />
        <Ionicons name="ellipsis-vertical" size={30} />
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* <View style={styles.cornerTab}> */}
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/bf/b5/e1/bfb5e1e140a991a756f00ed65613be98.jpg' }} // replace with your own hosted image or local asset
            style={styles.image}
          />
          {/* <Text style={styles.caption}>WHY THE RUSH?</Text> */}
        {/* </View> */}
      </View>

      {/* Navigation Arrows */}
      <View style={styles.arrows}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={35} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="arrow-forward" size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 350,
    height: 600,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  caption: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  arrows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 70,
  },
});
