import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface Connection {
  isConnected: boolean;
}

const initialState: Connection = {
  isConnected: false,
};

export const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setConnection: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
  },
});

export const {setConnection} = connectionSlice.actions;
