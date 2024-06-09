import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: 'blogApi',
  keepUnusedDataFor: 10,
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
    prepareHeaders: (headers) => {
      const token = '123'
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
      providesTags: (result) => {
        if (result) {
          const final = [
            ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
            { type: 'Posts' as const, id: 'LIST' }
          ]
          return final
        }
        return [{ type: 'Posts', id: 'LIST' }]
      }
    }),
    addPost: builder.mutation<Post, Omit<Post, 'id'>>({
      query: (post) => ({
        url: 'posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags: (result, error, body) =>
        error
          ? []
          : [
              {
                type: 'Posts' as const,
                id: 'LIST'
              }
            ]
    }),
    getPost: builder.query<Post, string>({
      query: (id) => `posts/${id}`
    }),
    updatePost: builder.mutation<Post, { id: string; body: Post }>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: 'PUT',
        body: post.body
      }),
      invalidatesTags: (result, error, body) =>
        error
          ? []
          : [
              {
                type: 'Posts' as const,
                id: body.id
              }
            ]
    }),
    deletePost: builder.mutation<{}, string>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, id) => [
        {
          type: 'Posts' as const,
          id
        }
      ]
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery, useUpdatePostMutation, useDeletePostMutation } =
  blogApi
