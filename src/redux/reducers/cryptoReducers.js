import { ADD_CRYPTO, REMOVE_CRYPTO, UPDATE_CRYPTO_DATA } from '../actions/cryptoActions';

const initialState = {
  cryptos: []
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CRYPTO:
      return {
        ...state,
        cryptos: [...state.cryptos, action.payload]
      };
    case REMOVE_CRYPTO:
      return {
        ...state,
        cryptos: state.cryptos.filter(crypto => crypto.id !== action.payload)
      };
    case UPDATE_CRYPTO_DATA:
      return {
        ...state,
        cryptos: state.cryptos.map(crypto =>
          crypto.id === action.payload.id ? { ...crypto, ...action.payload } : crypto
        )
      };
    default:
      return state;
  }
};

export default cryptoReducer;
