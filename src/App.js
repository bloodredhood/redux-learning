import { useDispatch, useSelector } from 'react-redux';
import './App.css';
//import { fetchCustomers } from './asyncActions/customers';
import { addUserAction, removeUserAction, fetchUsers } from './store/types';
import {ADD_CASH, GET_CASH} from "./store/types"

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const users = useSelector(state => state.users.users)

  const addCash = (cash) => {
    dispatch({ type: ADD_CASH, payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: GET_CASH, payload: cash })
  }

  const addUser = (name) => {
    const user = {
      name,
      id: Date.now(),
    }
    dispatch(addUserAction(user))
  }

  const removeUser = (user) => {
    dispatch(removeUserAction(user.id))
  }

  return (
    <div className={'App'}>
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addUser((prompt()))}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchUsers())}>Получить клиентов</button>
      </div>
      {users.length > 0 ?
        <div>
          {users.map(user =>
            <div onClick={() => removeUser(user)} style={{fontSize: "2rem",
                        border: "1px solid black",
                        paddingTop: "10px",
                        marginTop: "10px"}}>
              {user.name}
            </div>
          )}
        </div>
        :
        <div style={{fontSize: "2rem"}}>
          Клиенты отсутствуют
        </div>
      }
    </div>
  )
}

export default App;
