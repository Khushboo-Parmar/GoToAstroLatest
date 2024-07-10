import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from '../Slice/UserData'

const rootReducer = combineReducers({
  user: userReducer
});


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
