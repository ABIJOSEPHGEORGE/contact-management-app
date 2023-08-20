import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface navigationState {
    toggle: boolean,
}

const initialState: navigationState ={
    toggle: false,
}

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        toggleSidebar: (state, action: PayloadAction<boolean>) => {
            state.toggle = action.payload;
        }
    }
})

export const { toggleSidebar } = navigationSlice.actions;
export default navigationSlice.reducer;