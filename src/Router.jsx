import React, { useEffect } from "react";
import axios from "axios";
function Router(){
const [countries,setCountries]=React.useState([])
useEffect(()=>{
axios.get("https://restcountries.com/v3/all").then(function(response){
console.log(response.data)
setCountries(response.data)
})
},[])
return(
<div >
<ul className="mybox">
{
countries.length>0 && countries.map(function(country,i){
return <li key={i}>{country.name.common}</li>
})
}
</ul>
</div>
)
}
export default Router;