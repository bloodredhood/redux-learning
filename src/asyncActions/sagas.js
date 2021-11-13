import {put, takeEvery, call} from "redux-saga/effects"
import { addManyUsersAction, FETCH_USERS } from "../store/types"

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
//this is promise

function* fetchUsersWorker() {
	const data = yield call(fetchUsersFromApi) 
	const json = yield call(() => new Promise(res => res(data.json())))
	yield put(addManyUsersAction(json))
}

export function* usersWatcher() {
	yield takeEvery(FETCH_USERS, fetchUsersWorker)
}
