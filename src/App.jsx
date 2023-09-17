import {store} from "./app/store";
import {Provider} from "react-redux";
import Countries from "./features/countries/Countries";
import Books from "./features/books/Books";
import Header from "./shared/Header";
import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";
import { Outlet} from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
    <div className="mybox">
      <Header></Header>
      <Outlet></Outlet>
    </div>
    </Provider>
  );
}

export default App;
