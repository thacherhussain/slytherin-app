import {RootState} from '@store'
import {AnyAction} from 'redux'
import {ThunkAction} from 'redux-thunk'

import {Character} from 'src/models/character'

export const GET_CHARACTERS = 'character/GET_CHARACTERS'
export const GET_CHARACTERS_SUCCESS = 'character/GET_CHARACTERS_SUCCESS'
export const GET_CHARACTERS_FAILURE = 'character/GET_CHARACTERS_FAILURE'

export const getCharacters = () => ({
  type: GET_CHARACTERS,
})

export const getCharactersSuccess = (characters: Character[]) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: characters,
})

export const getCharactersFailure = () => ({
  type: GET_CHARACTERS_FAILURE,
})

export function fetchCharacters(): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return async dispatch => {
    dispatch(getCharacters())

    try {
      const response = await fetch(
        'https://potterverse-api.herokuapp.com/api/characters',
      )
      const data = await response.json()
      dispatch(getCharactersSuccess(data))
    } catch (error) {
      dispatch(getCharactersFailure())
    }
  }
}
