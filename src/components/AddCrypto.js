import React, { useState, useCallback } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCrypto } from '../redux/actions/cryptoActions';

const AddCrypto = () => {
  const [cryptoId, setCryptoId] = useState('');
  const [isFocused, setIsFocused] = useState(false); 
  const dispatch = useDispatch();

  const handleAddCrypto = useCallback(() => {
    if (cryptoId.trim()) {
      dispatch(addCrypto({ id: cryptoId }));
      setCryptoId('');
    }
  }, [cryptoId, dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Add a Cryptocurrency</Text>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]} 
        placeholder="Enter crypto ID (e.g., bitcoin)"
        value={cryptoId}
        onChangeText={setCryptoId}
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)} 
      />
      <TouchableOpacity style={styles.button} onPress={handleAddCrypto}>
        <Text style={{ color: "#385775", fontWeight: "bold" }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20, 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20, 
    width: '80%', 
  },
  inputFocused: {
    borderColor: '#FBD24C', 
  },
  button: {
    backgroundColor: "#FBD24C",
    padding: 10,
    alignItems: "center",
    width: 100,
  }
});

export default AddCrypto;
