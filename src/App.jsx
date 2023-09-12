import {Provider} from "react-redux";
import store from "./store"
import Counter from "./Counter"
import Todolist from "./Todolist";
function App() {
  return (
    <Provider store={store}>
    <div className="mybox">
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
    </Provider>
  );
}

export default App;
