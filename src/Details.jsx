import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
function Details(){
var {cname}=useParams();
var [details,setDetails]=React.useState(null)
useEffect(()=>{
axios.get("https://restcountries.com/v3.1/name/"+cname).then(function(response){
setDetails({...response.data[0]})
})

},[cname])
return(
<div>
{
details &&(
<div className="card " style={{width: "18rem;"}}>
<img src={details.flags.png} className="card-img-top"/>
<div className="card-body text-center bg-warning">
<h1 className="card-title">{details.name.common}</h1>
<span className="badge bg-success">{details.capital}</span>
<span className="badge bg-primary">{details.population}</span>
<span className="badge bg-info text-end">{details.region}</span>
</div>
</div>
)
}
</div>
    )
}
export default Details;