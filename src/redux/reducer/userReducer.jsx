import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userSignIn: {},
  userProfile: null,
  newUser: {},
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    signInAction: (state, action) => {},
    signUpAction: (state, action) => {},
    getUserProfileAction: (state, action) => {},
  },
});

export const { signInAction, signUpAction, getUserProfileAction } = userReducer.actions;

export default userReducer.reducer;
