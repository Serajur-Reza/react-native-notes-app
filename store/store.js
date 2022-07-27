import {combineReducers, createStore} from 'redux';
import NotesReducer from './NotesReducer';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  NotesReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persister = persistReducer(persistConfig, rootReducer);

// export const store = createStore(rootReducer);
export const store = createStore(persister);
export const persistor = persistStore(store);
