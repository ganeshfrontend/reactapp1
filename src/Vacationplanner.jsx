import React from "react";
import axios from "axios";
function Vacationplanner(){
var [vacation,setVacation]=React.useState([])
React.useEffect(
function(){
axios.get("https://course-api.com/react-tours-project").then(function(response){
console.log(response.data)
setVacation([...response.data])
 
})},[])
return(
<div>
 {
 vacation.map(function(v){
 return <li className="mybox li">
<img src={v.image}  className="img"/><br />
    Name:{v.name}
 <p>Information:{v.info}</p>
 <span>Price:{v.price}</span>
 </li>
 })
}
</div>
)
}
export default Vacationplanner;