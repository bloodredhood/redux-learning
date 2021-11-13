import { ADD_MANY_USERS, ADD_USER, REMOVE_USERS } from "./types"

const defaultState = {
	users: []
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_USERS:
      return {...state, users: action.payload}
    case ADD_USER:
      return {...state, users: [...state.users, action.payload]}
    case REMOVE_USERS:
      return {...state, users: state.users.filter(user =>
				user.id !== action.payload
				)}
    default:
      return state
  }
}

