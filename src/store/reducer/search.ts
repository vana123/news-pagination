import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tsearch ={
    searchInput: string,
    searchValue: string,
}

const initialState: Tsearch = {
    searchInput: '',
    searchValue: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        searchChange(state, action: PayloadAction<string>){
            state.searchInput = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>){
            if(action.payload){
                state.searchValue = action.payload
            }else{
                state.searchValue = state.searchInput
            }
        }
    }
})

export const {} = searchSlice.actions
export const searchReducer = searchSlice.reducer