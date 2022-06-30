import React, { useEffect } from "react"

import { TextField } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { searchSlice } from '../store/reducer/search';
import { useDebounce } from "use-debounce";

export const SearchField:React.FC = () :JSX.Element => {
    const dispatch = useAppDispatch()
    const {searchInput} = useAppSelector(state => state.searchReducer)
    const [value] = useDebounce(searchInput, 500)

    useEffect(()=>{
        dispatch(searchSlice.actions.setSearchValue(''))
    }, [value])

    return (
        <div className="SearchField" >
            <TextField
                fullWidth 
                label={'search'}
                value={searchInput}
                onChange={(e)=>{dispatch(searchSlice.actions.searchChange(e.target.value))}}
                margin="dense"
            ></TextField>
        </div>
    )
}