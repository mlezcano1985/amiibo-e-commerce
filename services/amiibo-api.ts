import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Amiibo from '../models/amiibo'
import AmiiboDto from '../models/amiibo-dto'
import AmiiboListDto from '../models/amiibo-list-dto'
import { toDomain } from '../tools'

/**
 * RTK Query (RDKQ)
 * @see {@link https://redux-toolkit.js.org/tutorials/rtk-query}
 *
 * @description
 * Se dejó de usar en favor de SSG (Static-site generation)
 * @see {@link https://nextjs.org/docs/basic-features/data-fetching/get-static-props}
 */
const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://amiiboapi.com/api' }),
  reducerPath: 'amiiboApi',
  endpoints: (build) => ({
    getAllAmiibos: build.query<Amiibo[], undefined>({
      query: () => '/amiibo',
      transformResponse: ({ amiibo }: AmiiboListDto) => {
        return amiibo.map(toDomain)
      },
    }),

    getAmiiboById: build.query<Amiibo, string>({
      query: (id: string) => `/amiibo/?id=${id}`,
      transformResponse: ({ amiibo }: { amiibo: AmiiboDto }) => {
        return toDomain(amiibo)
      },
    }),
  }),
})

export default api

export const { useGetAllAmiibosQuery, useGetAmiiboByIdQuery } = api
