export const ADD_CASH = "ADD_CASH"
export const GET_CASH = "GET_CASH"
export const ADD_USER = "ADD_USER"
export const REMOVE_USERS = "REMOVE_USERS"
export const ADD_MANY_USERS = "ADD_MANY_USERS"
export const FETCH_USERS = "FETCH_USERS"


export const addUserAction = (payload) => ({ type: ADD_USER, payload })
export const removeUserAction = (payload) => ({ type: REMOVE_USERS, payload })
export const addManyUsersAction = (payload) => ({ type: ADD_MANY_USERS, payload })
export const fetchUsers = () => ({type: FETCH_USERS})