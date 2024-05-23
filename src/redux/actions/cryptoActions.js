// import axios from 'axios';

// export const ADD_CRYPTO = 'ADD_CRYPTO';
// export const REMOVE_CRYPTO = 'REMOVE_CRYPTO';
// export const UPDATE_CRYPTO_DATA = 'UPDATE_CRYPTO_DATA';

// export const addCrypto = (crypto) => ({
//   type: ADD_CRYPTO,
//   payload: crypto
// });

// export const removeCrypto = (id) => ({
//   type: REMOVE_CRYPTO,
//   payload: id
// });

// export const updateCryptoData = (data) => ({
//   type: UPDATE_CRYPTO_DATA,
//   payload: data
// });

// export const fetchCryptoData = (crypto, retryCount = 3) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`https://data.messari.io/api/v1/assets/${crypto}/metrics`);

//       console.log("HEREEEE", response.data.data)
//       dispatch(updateCryptoData(response.data.data));
//     } catch (error) {
//       console.error('Error fetching crypto data', error);
//       if (error.response && error.response.status === 429 && retryCount > 0) {
//         await new Promise(resolve => setTimeout(resolve, 5000)); 
//         dispatch(fetchCryptoData(crypto, retryCount - 1)); 
//       } else {
//         console.error('Exceeded retry limit. Aborting.');
//       }
//     }
//   };
// };






