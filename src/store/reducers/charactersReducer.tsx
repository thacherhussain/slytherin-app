import * as actions from '../actions/charactersActions'
import {Character} from '../../models'

export type CharactersState = {
  characters: Character[]
  loading: boolean
  hasErrors: boolean
}

export const initialState: CharactersState = {
  characters: [],
  loading: false,
  hasErrors: false,
}

type Action =
  | {type: typeof actions.GET_CHARACTERS}
  | {type: typeof actions.GET_CHARACTERS_SUCCESS; payload: Character[]}
  | {type: typeof actions.GET_CHARACTERS_FAILURE}

export default function charactersReducer(
  state = initialState,
  action: Action,
): CharactersState {
  switch (action.type) {
    case actions.GET_CHARACTERS:
      return {...state, loading: true}
    case actions.GET_CHARACTERS_SUCCESS:
      return {characters: action.payload, loading: false, hasErrors: false}
    case actions.GET_CHARACTERS_FAILURE:
      return {...state, loading: false, hasErrors: false}
    default:
      return state
  }
}
