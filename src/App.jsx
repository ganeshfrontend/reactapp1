import Counter from './Counter';
import Todolist from './Todolist';
import Iplteam from './Iplteam';
import Todolist1 from './Todolist-1';
function App() {
  return (
    <div className="tarun">
      <h1>welcome to ganesh world</h1>
    <Counter start={10} i={10}></Counter>
    <Counter start={5} i={5}></Counter>
    <Todolist></Todolist>
    <Iplteam></Iplteam>
    <Todolist1></Todolist1>
    </div>
  );
}

export default App;
