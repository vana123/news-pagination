import React from 'react';
import { SearchField } from '../components/SearchField';
import { ListPosts } from '../components/ListPosts';

export const NewsPage:React.FC = () :JSX.Element => {

    return(
        <div className='NewsPage'>
            <SearchField/>
            <ListPosts/>
        </div>
    )
}