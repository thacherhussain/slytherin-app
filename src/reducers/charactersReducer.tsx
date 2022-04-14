import * as actions from '../actions/charactersActions'

export const initialState = {
  characters: [],
  loading: false,
  hasErrors: false,
}

export default function charactersReducer(state = initialState, action) {
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
