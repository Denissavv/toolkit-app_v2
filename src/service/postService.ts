import { build } from "@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IPosts } from "../models/IPosts"

export const postService = createApi({
    reducerPath: "userApi",
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPosts[], number>({
            query: (limit: number = 5) => ({
                url: "/posts",
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post'],
        }),

        pushPost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post
            }),
            invalidatesTags: ['Post']
        }),

        refreshPost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "PUT",
                body: post
            }),
            invalidatesTags: ['Post']
        }),

        deletePost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "DELETE",
                body: post
            }),
            invalidatesTags: ['Post']
        })

    })
})

