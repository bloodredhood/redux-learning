import { applyMiddleware, combineReducers, createStore } from "redux"
import { cashReducer } from "./cashReducer"
import { customerReducer } from "./customerReducer"
//import thunk from "redux-thunk"
import createSagaMiddleware from "@redux-saga/core"
import { customersWatcher } from "../asyncActions/sagas"


const saga = createSagaMiddleware()

const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customerReducer
})

export const store = createStore(rootReducer,applyMiddleware(saga))

saga.run(customersWatcher)