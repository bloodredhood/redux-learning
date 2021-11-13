export const ADD_CASH = "ADD_CASH"
export const GET_CASH = "GET_CASH"
export const ADD_CUSTOMER = "ADD_CUSTOMER"
export const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS"
export const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMERS, payload })
export const addManyCustomersAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload })
export const addCustomersSagaAction = () => ( { type: ADD_MANY_CUSTOMERS } )