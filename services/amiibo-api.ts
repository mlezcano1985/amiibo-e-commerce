import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Amiibo from '../models/amiibo'
import AmiiboDto from '../models/amiibo-dto'
import AmiiboListDto from '../models/amiibo-list-dto'

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const toDomain = (dto: AmiiboDto): Amiibo => ({
  ...dto,
  id: `${dto.head}${dto.tail}`,
  price: randomIntFromInterval(1000, 100000),
})

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://amiiboapi.com/api' }),
  reducerPath: 'amiiboApi',
  endpoints: (build) => ({
    getAllAmiibos: build.query<Amiibo[], undefined>({
      query: () => '/amiibo',
      transformResponse: ({ amiibo }: AmiiboListDto) => {
        return amiibo.map((dto): Amiibo => toDomain(dto))
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
