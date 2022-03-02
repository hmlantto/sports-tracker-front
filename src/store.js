import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './reducers/userSlice'

const rootReducer = combineReducers({
  user: userReducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer( persistConfig, rootReducer )

const store = configureStore({
  reducer: persistedReducer,
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store