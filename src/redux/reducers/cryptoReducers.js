import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api'

const initialState = {
  loading: false,
  error: '',
  cryptos: [],
};

export const fetchCryptoData = createAsyncThunk(
  'crypto/fetchCryptoData',
  async (cryptoId, { rejectWithValue }) => {
    try {
      const res = await api.get(`${cryptoId}/metrics`);
      const data = res.data;
      return { id: cryptoId, data };
    } catch (err) {
      console.log("here",err)
      return rejectWithValue('Crypto data invalid');
    }
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    addCrypto: (state, action) => {
      state.cryptos.push({ id: action.payload.id, data: null });
    },
    deleteCrypto: (state, action) => {
      state.cryptos = state.cryptos.filter(crypto => crypto.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCryptoData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.cryptos.findIndex(crypto => crypto.id === action.payload.id);
        if (index !== -1) {
          state.cryptos[index].data = action.payload.data;
        }
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addCrypto, deleteCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
