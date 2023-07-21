import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/counterSlice';

function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
