import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  }
});

export const { loginStart, loginSuccess, loginFailure,updateUser, logout } = authSlice.actions;
export default authSlice.reducer;
