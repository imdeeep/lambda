import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMessagesStart: (state) => {
      state.loading = true;
    },
    fetchMessagesSuccess: (state, action) => {
      state.loading = false;
      state.messages = action.payload;
    },
    fetchMessagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const {
  fetchMessagesStart,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  addMessage,
} = chatSlice.actions;
export default chatSlice.reducer;
