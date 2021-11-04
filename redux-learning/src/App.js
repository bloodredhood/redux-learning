import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch
  const cash = useSelector(state => state.cash)
  console.log(cash)

  return (
    <div className={'App'}>
      <div style={{display: "flex"}}>
        <button>Пополнить счет</button>
        <button>Снять со счета</button>
      </div>
    </div>
  )
}

export default App;
