import { PERSIST_STORE_NAME } from '@/configs/constants/app.constant';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';

const middlewares: any[] = [];
if (process.env.NODE_ENV !== 'production') middlewares.push(logger);

const persistConfig = {
    key: PERSIST_STORE_NAME,
    keyPrefix: '',
    storage,
    whitelist: ['auth']
}

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(middlewares),
    // devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store