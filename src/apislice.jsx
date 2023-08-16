import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ProductsApi=createApi({
  reducerPath:'productsApi',
  baseQuery:fetchBaseQuery({baseUrl:'http://dummyjson.com'}),
  endpoints:(builder)=>({
    getAllProducts:builder.query({
      query:()=>'products'
    }),
    getProduct:builder.query({
      query:(product)=>`products/search?q=${product}`
    })
  })
})

export const {useGetAllProductsQuery, useGetProductQuery}=ProductsApi