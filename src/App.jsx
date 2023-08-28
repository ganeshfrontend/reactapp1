import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Iplteam from './Iplteam';
function App() {
  return (
    <div className="tarun">
      <h1>welcome to ganesh world</h1>
    <Counter start={10} i={10}></Counter>
    <Counter start={5} i={5}></Counter>
    <Todolist></Todolist>
    <Iplteam></Iplteam>
    </div>
  );
}

export default App;
