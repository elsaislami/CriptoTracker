import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CryptoIcon from 'rn-crypto-icons-svg';
import { formatNumber } from '../utils/numberUtils';
import {LineChart, BarChart} from 'react-native-charts-wrapper';



const CryptoDetailsScreen = ({ route }) => {

  const { crypto } = route.params;

  return (
    <View style={styles.container}>
      <CryptoIcon name={crypto?.symbol?.toLowerCase()} size={48} shape='circular' />
      <Text style={styles.name}>{crypto.name}</Text>
      <Text style={styles.symbol}>{crypto.symbol}</Text>
      <Text style={styles.price}>${formatNumber(crypto.market_data.price_usd)} (Today)</Text>
      <Text style={styles.change}>
      Last 24 hours:  {formatNumber(crypto.market_data.percent_change_usd_last_24_hours)}%
      </Text>
      <Text style={styles.change}>
        Last 1 hour: {formatNumber(crypto.market_data.percent_change_usd_last_1_hour)}%
      </Text>
      <View style={styles.chartContainer}>
      <BarChart
  drawValueAboveBar={false}
  drawBarShadow={true}
  style={styles.chart}
  data={{
    dataSets: [{
      values: [{ y: crypto?.market_data?.percent_change_usd_last_1_hour }],
      label: 'Last 1 hour',
    }, {
      values: [{ y: crypto?.market_data?.percent_change_usd_last_24_hours }],
      label: 'Last 24 hours',
    }],
    custom: {
      colors: ['#F5FCFF', '#f5426c'], 
    },
  }}
/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF', 
  },
  chartContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    color: "#f5426c"
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  symbol: {
    fontSize: 18,
    color: '#666',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  change: {
    fontSize: 18,
    color: '#666',
  },
  chart: {
    flex: 1,
  }
});

export default CryptoDetailsScreen;
