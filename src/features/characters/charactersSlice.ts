import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {Character} from 'src/types'

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
      transformResponse: (res: Character[]) => {
        return res[0]
      },
    }),
  }),
})

export const {useGetAllCharactersQuery, useGetSingleCharacterQuery} =
  charactersApi
