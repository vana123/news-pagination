import React from 'react';
import { useGetNewsQuery } from '../service/NewsService';
import { SearchField } from '../components/SearchField';
import { ListPosts } from '../components/ListPosts';

export const NewsPage:React.FC = () :JSX.Element => {
    const {data} = useGetNewsQuery({query: "react", page: 5})

    return(
        <div className='NewsPage'>
            <SearchField/>
            <ListPosts/>
        </div>
    )
}