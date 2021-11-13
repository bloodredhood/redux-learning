import { applyMiddleware, combineReducers, createStore } from "redux"
import { cashReducer } from "./cashReducer"
import { userReducer } from "./userReducer"
//import thunk from "redux-thunk"
import createSagaMiddleware from "@redux-saga/core"
import { usersWatcher } from "../asyncActions/sagas"


const saga = createSagaMiddleware()

const rootReducer = combineReducers({
	cash: cashReducer,
	users: userReducer
})

export const store = createStore(rootReducer,applyMiddleware(saga))

saga.run(usersWatcher)