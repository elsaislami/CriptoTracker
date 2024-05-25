import React, { useState, useCallback } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { addCrypto, fetchCryptoData } from '../redux/reducers/cryptoReducers';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

const AddCrypto = () => {
  const [cryptoId, setCryptoId] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cryptos = useSelector(state => state.crypto.cryptos);

  const handleAddCrypto = useCallback(() => {
    if (cryptoId.trim()) {
      const existingCrypto = cryptos.find(crypto => crypto.id === cryptoId);
      if (!existingCrypto) {
        dispatch(addCrypto({ id: cryptoId }));
        dispatch(fetchCryptoData(cryptoId));
        navigation.navigate('Home');
        setCryptoId('');
      } else {
        alert('Crypto ID already exists');
      }
    }
  }, [cryptoId, cryptos, dispatch, navigation]);

  const handleChangeText = (text) => {
    setCryptoId(text.toUpperCase());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Add a Cryptocurrency</Text>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder="Enter crypto ID (e.g., BITCOIN)"
        value={cryptoId}
        onChangeText={handleChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCapitalize="characters"
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
    textTransform: 'uppercase',
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
