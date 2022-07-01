import React, { useState } from "react"
import {Pagination, Card, CardContent, Button, Typography, Grid, CircularProgress, Box, PaginationItem } from "@mui/material"
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { useAppSelector } from '../hooks/redux';
import { newsAPI } from "../service/NewsService";

export const ListPosts:React.FC = () :JSX.Element => {
    const {searchValue} = useAppSelector(state => state.searchReducer)
    const [searchParams, setSearchParams] = useSearchParams();

    const pageURL = parseInt(searchParams.get('page') || '1', 10)
    const searchURL = searchParams.get('search') || ''
    
    const {data, isError, isLoading} = newsAPI.useGetNewsQuery({query: searchURL, page: pageURL-1})
    

    if(!data){
        return(
            <Box className="ListPosts">
                <CircularProgress disableShrink/>
            </Box>        
        )
    }else
    return (
        <div className="ListPosts">
            <Grid container spacing={2} justifyContent="center">
            {data.hits.map((hit)=>{
                return(
                    <Grid item xs={3}>
                    <Card sx={{height: "100%"}}>
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
                renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      to={`/?page=${item.page}&search=${searchURL}`}
                      {...item}
                    />
                  )}
                size="large"
                sx={{display: "flex", justifyContent: "center", marginY: '10px', marginX: 'auto',}}
            /> 
        </div>
    )
}