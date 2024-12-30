import { combineReducers } from "@reduxjs/toolkit";
import auth from './features/auth';

const rootReducer = combineReducers({
    auth
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;