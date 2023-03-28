import { createStore } from 'redux';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/types';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['filters', 'positions'],
    blacklist: ['filters'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
export const persistor = persistStore(persistStore);
