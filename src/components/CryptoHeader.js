import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import profilePicture from '../assets/images/profile.jpeg'

const CryptoHeader = () => {
  return (
    <View style={styles.header}>
    <Text style={styles.headerText}>CryptoTracker Pro</Text>
    <Image
      source={profilePicture} 
      style={styles.roundedImage}
    />
    
  </View>
  );
};

const styles = StyleSheet.create({
 
  header: {
    backgroundColor: '#385775',
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 25
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  },
  roundedImage: {
    width: 45,
    height: 45,
    borderRadius: 50
  }
});

export default CryptoHeader;
