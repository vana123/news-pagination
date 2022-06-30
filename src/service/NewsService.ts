import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_USL } from '../constant/api'
import { TNews } from '../type/News';

export const newsAPI = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_USL }),
    endpoints: (builder) => ({
        getNews: builder.query<TNews, {query: string; page: number}>({
            query: (arg) => {
                const {page, query} = arg;
                return({
                    url: `/search`,
                    params:{
                        query: query,
                        page: page,
                    }
                })
            }
        }),
  }),
})

export const { useGetNewsQuery } = newsAPI