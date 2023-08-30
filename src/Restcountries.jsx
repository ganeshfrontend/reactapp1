import React from "react";
import axios from "axios";
function Restcountries(){
var [countries,setCountries]=React.useState([])
React.useEffect(
function(){
axios.get("https://restcountries.com/v3/all").then(function(response){
console.log(response.data)
setCountries([...response.data])
})},[])
function asc(){
countries.sort(function(a,b){

var a1=a.name.common
var a2=b.name.common
if(a1<a2)
{
return -1
}
if(a1>a2)
{
return 1
}
return 0
})
setCountries([...countries])
}
function desc(){
    countries.sort(function(a,b){
    
    var a1=a.name.common
    var a2=b.name.common
    if(a1<a2)
    {
    return 1
    }
    if(a1>a2)
    {
    return -1
    }
    return 0
    })
    setCountries([...countries])
    }
    
return(
 <div className="mybox">
<button onClick={asc}>Ascending</button>
<button onClick={desc}>Descending</button>
{
 countries.length>0 && countries.map((country)=>{
    return <li>{country.name.common}</li>
    })
}
 </div>  

 
)
}
export default Restcountries;