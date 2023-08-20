import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SingleContact = {first_name:string,last_name:string,status:string}
type UpdateContact = {
    singleContact: SingleContact,
    index: number
}

interface contactState {
    contacts: SingleContact[],
}

const initialState: contactState = {
    contacts:[],
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        createContact: (state, action: PayloadAction<SingleContact>) => {
            state.contacts.push(action.payload);
        },
        deleteSingleContact: (state, action: PayloadAction<number>) => {
            state.contacts.splice(action.payload,1);
        },
        updateContact: (state, action: PayloadAction<UpdateContact>) => {
            state.contacts[action.payload.index] = action.payload.singleContact;
        }
    }
})

export const { createContact, deleteSingleContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;