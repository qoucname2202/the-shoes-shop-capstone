import { createSlice } from '@reduxjs/toolkit';
import { getStoreJson, USER_SIGNIN } from '~/services/Utils/config';

const initialState = {
  userSignIn: getStoreJson(USER_SIGNIN) ? getStoreJson(USER_SIGNIN) : null,
  userProfile: null,
  newUser: {},
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    signInAction: (state, action) => {
      state.userSignIn = action.payload;
    },
    signUpAction: (state, action) => {
      state.newUser = action.payload;
    },
    getUserProfileAction: (state, action) => {},
  },
});

export const { signInAction, signUpAction, getUserProfileAction } = userReducer.actions;

export default userReducer.reducer;
