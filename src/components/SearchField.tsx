import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

import { TextField } from '@mui/material'
import { useDebounce } from "use-debounce";

export const SearchField:React.FC = () :JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageURL = searchParams.get('page')
    const searchURL = searchParams.get('search')
    
    const [searchInput, setSearchInput] = useState(searchURL)
    const [value] = useDebounce(searchInput, 500)

    useEffect(()=>{
        setSearchParams({page: `${pageURL || 1}`, search: `${value}`});
    }, [value])
    useEffect(()=>{
        setSearchParams({page: `${pageURL || 1}`, search: `${searchURL}`});
    }, [])

    return (
        <div className="SearchField" >
            <TextField
                fullWidth 
                label={'search'}
                value={searchInput}
                onChange={(e)=>{setSearchInput(e.target.value)}}
                margin="dense"
            ></TextField>
        </div>
    )
}