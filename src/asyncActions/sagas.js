import {put, takeEvery, call} from "redux-saga/effects"
import { addCustomersSagaAction, ADD_MANY_CUSTOMERS } from "../store/types"

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
//this is promise

function* fetchCustomersWorker() {
	const data = yield call(fetchUsersFromApi) 
	const json = yield call(() => new Promise(res => res(data.json())))
	yield put(addCustomersSagaAction(json))
}

export function* customersWatcher() {
	yield takeEvery(ADD_MANY_CUSTOMERS, fetchCustomersWorker)
}
