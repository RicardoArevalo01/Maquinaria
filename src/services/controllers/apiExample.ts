import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../routes';
export interface Post {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Post'],
  refetchOnFocus: true,
  keepUnusedDataFor: 5,
  endpoints: build => ({
    //GET
    getPosts: build.query<Post[], void>({
      query: () => '',
      providesTags: ['Post'],
    }),
    //POST
    /* addPost: build.mutation<any, Omit<Post, 'id'>>({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
    }), */
  }),
});

export const {useGetPostsQuery} = api;
