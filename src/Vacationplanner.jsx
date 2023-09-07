import React from "react";
import axios from "axios";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
function Vacationplanner(){
var [vacation,setVacation]=React.useState([])
React.useEffect(
function(){
axios.get("https://course-api.com/react-tours-project").then(function(response){
console.log(response.data)
setVacation([...response.data])
 
})},[])
function int(){
var temp=[...vacation]
temp.splice(0,1)
setVacation(temp)
}
return(
<div className=" mybox" style={{width:"18rem;"}}>
 {
 vacation.map(function(v){
return <li className="card m-5">
    <img src={v.image}  className="card-img-top img"/><br />
<div className="card-body">
<h5 className="card-title">{v.name} 
<h6 className="badge bg-primary">${v.price}</h6>
</h5>
<p className="card-text">{v.info}</p>
<div className="d-grid gap-2 col-4 mx-auto">
<button className="btn btn-outline-danger" onClick={int}>Not Interested</button>
</div>
</div>
</li>
})
}
</div>
)
}
export default Vacationplanner;