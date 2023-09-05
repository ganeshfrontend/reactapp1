import {Link,Outlet} from "react-router-dom";
function App() {
  return (
    <div className="mybox">
      <h1>hi ganesh</h1>
      <Link  to="/Courses" >Courses</Link>&nbsp;&nbsp;
      <Link  to="/Aboutus" >Aboutus</Link>&nbsp;&nbsp;
      <Link  to="/countries" >countries</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
