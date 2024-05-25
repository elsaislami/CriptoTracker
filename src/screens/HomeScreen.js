import React, { useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CryptoItem from '../components/CryptoItem';
import { useNavigation } from '@react-navigation/native';
import { fetchCryptoData } from '../redux/reducers/cryptoReducers';

const HomeScreen = () => {
  const { cryptos, loading, error } = useSelector(state => state.crypto);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = () => {
      cryptos.forEach(crypto => {
        if (!crypto.data) {
          dispatch(fetchCryptoData(crypto.id));
        }
      });
    };

    fetchData();

    const intervalId = setInterval(fetchData, 86400000);

    return () => clearInterval(intervalId);
  }, [cryptos, dispatch]);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      <FlatList
        data={cryptos}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>{item.symbol && <CryptoItem crypto={item.data?.data} />}}
      />
      <TouchableOpacity onPress={() => navigation.navigate('AddCrypto')} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Cryptocurrency</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8"
  },
  addButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: '#385775',
    fontSize: 18,
  },
});

export default HomeScreen;
