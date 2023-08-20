import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './navigationSlice';
import contactReducer from './contactSlice';

const rootReducer = combineReducers({
    navigation: navigationReducer,
    contact: contactReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;