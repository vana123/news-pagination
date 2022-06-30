import React, { useState } from "react"
import {Pagination, Card, CardContent, Button, Typography, Grid } from "@mui/material"
import { useAppSelector } from '../hooks/redux';
import { newsAPI } from "../service/NewsService";

export const ListPosts:React.FC = () :JSX.Element => {
    const {searchValue} = useAppSelector(state => state.searchReducer)
    const [page, setPage] = useState(1)
    const {data, isError, isLoading} = newsAPI.useGetNewsQuery({query: searchValue, page: page})


    if(!data){
        return(
            <div className="ListPosts">
                error
            </div>
        )
    }else
    return (
        <div className="ListPosts">
            <Grid container spacing={2} justifyContent="center">
            {data.hits.map((hit)=>{
                return(
                    <Grid item xs={3}>
                    <Card sx={{height: 150}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                {hit.title || hit.story_title || hit.story_text}
                            </Typography> 
                            <Button 
                                size="small"
                                variant="outlined"
                                href={hit.url || "#"}
                            >Learn More</Button>
                        </CardContent>
                    </Card>
                    </Grid>
                )
            })}
            </Grid>
            <Pagination
                count = {data.nbPages}
                page = {data.page + 1}
                onChange = {(_, num) => { setPage(num-1) }}
            /> 
        </div>
    )
}