import React, { useState, useCallback, useEffect } from 'react';
import { View,  TextInput, Button, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addCrypto } from '../redux/actions/cryptoActions';
import CryptoItem from '../components/CryptoItem';
import { useNavigation } from '@react-navigation/native';
import { fetchCryptoData } from '../redux/actions/cryptoActions';


const HomeScreen = () => {
  const [cryptoId, setCryptoId] = useState('');
  const cryptos = useSelector(state => state.crypto.cryptos);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    console.log("here", cryptos)
    // dispatch(fetchCryptoData("btc"))
    cryptos.forEach(crypto => {
      console.log(crypto)
      console.log("HELLO")
      dispatch(fetchCryptoData(crypto.id));
    });
  }, [cryptos, dispatch]);

  // const handleAddCrypto = useCallback(() => {
  //   if (cryptoId.trim()) {
  //     dispatch(addCrypto({ id: cryptoId }));
  //     setCryptoId('');
  //   }
  // }, [cryptoId, dispatch]);

  return (
    <View>
      <CryptoItem />
      <FlatList
        data={cryptos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CryptoItem crypto={item} />}
      />
      <TouchableOpacity  onPress={() => navigation.navigate('AddCrypto')} style={{  alignItems: "center"}}>
        <Text style={{ color: "#385775", fontSize: 18}}> + Add Cryptocurrency</Text>
      </TouchableOpacity>
    </View>
    // <View style={styles.screen}>
    
    //   <View style={styles.container}>
    //     <TextInput
    //       style={styles.input}
    //       placeholder="Enter crypto ID (e.g., bitcoin)"
    //       value={cryptoId}
    //       onChangeText={setCryptoId}
    //     />
    //     <Button title="Add Crypto" onPress={handleAddCrypto} />
    //   </View>
    //   <FlatList
    //   data={cryptoId}
    //   renderItem={({ item }) => <CryptoItem crypto={item} />}
    //   keyExtractor={item => item.id}
    // />
      
    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

});

export default HomeScreen;
