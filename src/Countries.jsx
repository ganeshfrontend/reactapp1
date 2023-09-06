import {Link,Outlet} from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
function Country(){
const [countries,setCountries]=React.useState([])
useEffect(()=>{
axios.get("https://restcountries.com/v3/all").then(function(response){
console.log(response.data)
setCountries(response.data)
})
},[])
return(
<div className="d-flex">
  <div>
  <ul  className=" mybox">
  {
  countries.length>0 && countries.map(function(c,i){
  return <li>
  <Link key={i} to={"details/"+c.name.common}>{c.name.common}</Link></li>
  })
  }
  </ul>
   </div>
<div>
<Outlet></Outlet>
</div>

</div>
)
}
export default Country;