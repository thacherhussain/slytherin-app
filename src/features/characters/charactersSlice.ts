import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {Character} from '../../types'

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://potterverse-api.herokuapp.com/api/',
  }),
  endpoints: builder => ({
    getAllCharacters: builder.query<Character[], void>({
      query: () => `/characters`,
    }),
    getSingleCharacter: builder.query<Character, number>({
      query: id => `/characters/${id}`,
    }),
  }),
})

export const {useGetAllCharactersQuery, useGetSingleCharacterQuery} =
  charactersApi
