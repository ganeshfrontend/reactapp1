import React, { useEffect } from "react";
import axios from "axios";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
function Countries(){
var [countries,setCountries]=React.useState([])
useEffect(()=>{
axios.get("https://restcountries.com/v3/all").then(function(response){
    console.log(response.data)
setCountries([...response.data])
})
},[])
function asc(){
countries.sort(function(a,b){
    var a=a.population
    var b=b.population
    if(a>b){
        return 1
    }
    if(a<b){
        return -1
    }
})
setCountries([...countries])
 }
 function des(){
    countries.sort(function(a,b){
        var a=a.population
        var b=b.population
        if(a>b){
            return -1
        }
        if(a<b){
            return 1
        }
    })
    setCountries([...countries])
     }
     function abc(){
        var input1 =document.getElementById("input").value
       var res= countries.filter(function(a){
            return a.name.common.toLowerCase().startsWith(input1)
        })
        setCountries(res)
     }
return(
    <div>
      <div className="mybox">
      <b>Sort By Population</b>&nbsp;&nbsp;
      <span onClick={asc}>Ascending</span>&nbsp;&nbsp;
      <span onClick={des}>Descending</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" placeholder="Search" id="input" onKeyUp={abc}/>
      <i className="bi bi-search"></i>
      </div>  
             <div className="d-flex flex-wrap">
             {
              countries.length>0 && countries.map(function(country,i){
             return <div key={i} className="m-3">
             <h4>{country.name.common}</h4>
             <img src={country.flags[1]} style={{width:"200px"}}/>
             <h5>Population:{country.population}</h5>
             </div>
             })
             }
             </div>
      </div>
)
}
export default Countries;