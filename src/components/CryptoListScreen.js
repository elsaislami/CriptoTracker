// import React, { useEffect } from 'react';
// import { View, FlatList, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import CryptoItem from './CryptoItem';
// import { fetchCryptoData } from '../redux/actions/cryptoActions';

// const CryptoList = () => {
//   const cryptos = useSelector(state => state.crypto.cryptos);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     console.log("here")
//     console.log("here", cryptos)
//     // dispatch(fetchCryptoData("btc"))
//     cryptos.forEach(crypto => {
//       console.log(crypto)
//       console.log("HELLO")
//       dispatch(fetchCryptoData(crypto.id));
//     });
//   }, [cryptos, dispatch]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={cryptos}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => <CryptoItem crypto={item} />}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
// });

// export default CryptoList;
