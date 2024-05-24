import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteCrypto } from '../redux/reducers/cryptoReducers';
import { formatNumber } from '../utils/numberUtils';
import PropTypes from 'prop-types';
import CryptoIcon from 'rn-crypto-icons-svg';
import { useNavigation } from '@react-navigation/native';

const CryptoItem = ({ crypto }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CryptoDetails', { crypto })}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.row}>
            <CryptoIcon name={crypto?.symbol?.toLowerCase()} size={48} shape='circular' />
            <View style={styles.justifyCenter}>
              <Text style={styles.fontBold}>{crypto?.name}</Text>
              <Text>{crypto?.symbol}</Text>
            </View>
          </View>
          <View style={styles.alignEnd}>
          <TouchableOpacity onPress={() => dispatch(deleteCrypto(crypto.id))} style={styles.customButton}>
          <Text style={styles.customButtonText}> x</Text>
        </TouchableOpacity>
            <Text style={styles.fontBold}>
              $ {formatNumber(crypto?.market_data?.price_usd)}
            </Text>
            <Text style={styles.change}>
              {formatNumber(crypto?.market_data?.percent_change_usd_last_24_hours)}%
            </Text>
             
          </View>
        </View>
       
        <View style={styles.horizontalLine} />
      </View>
    </TouchableOpacity>
  );
};

CryptoItem.propTypes = {
  crypto: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    market_data: PropTypes.shape({
      price_usd: PropTypes.number,
      percent_change_usd_last_24_hours: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
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
    marginTop: 20,
  },
  customButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#f8f8f8',
  },
  customButtonText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CryptoItem;
