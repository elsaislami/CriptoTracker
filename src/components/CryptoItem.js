import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeCrypto } from '../redux/actions/cryptoActions';
import bitcoin from "../assets/images/profile.jpeg";

const CryptoItem = ({ crypto }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.row}>
          <Image source={bitcoin} style={styles.roundedImage} />
          <View style={styles.justifyCenter}>
            <Text style={styles.fontBold}>Bitcoin</Text>
            <Text>BTC</Text>
          </View>
        </View>
        <View style={styles.alignEnd}>
          <Text style={styles.fontBold}>
            $ 7,214.68{crypto?.market_data?.price_usd}
          </Text>
          <Text style={styles.change}>
            1.82{crypto?.market_data?.percent_change_usd_last_24_hours}%
          </Text>
        </View>
      </View>
      <Button title="Remove" onPress={() => dispatch(removeCrypto(crypto.id))} />
      <View style={styles.horizontalLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roundedImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  justifyCenter: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  fontBold: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  change: {
    fontSize: 16,
    color: '#666',
  },
  horizontalLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginTop: 10,
  },
});

export default CryptoItem;
