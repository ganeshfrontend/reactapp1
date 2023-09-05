import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
function Cricket(){
const [cric,setCric]=React.useState(0)
const [wicket,setWicket]=React.useState(0)
         
return(
<div>
<h1 align="center">Cricket Score Board</h1>
<h3 align="center">0{cric}/0{wicket}</h3>
<button type="button" className="btn btn-primary btn-lg" onClick={()=>{setCric(cric+0)}}>0</button>&nbsp;
<button type="button" className="btn btn-primary btn-lg " onClick={()=>{setCric(cric+1)}}>1</button>&nbsp;
<button type="button" className="btn btn-primary btn-lg " onClick={()=>{setCric(cric+2)}}>2</button><br/>
<button type="button" className="btn btn-primary btn-lg " onClick={()=>{setCric(cric+3)}}>3</button>&nbsp;
<button type="button" className="btn btn-primary btn-lg " onClick={()=>{setCric(cric+4)}}>4</button>&nbsp;
<button type="button" className="btn btn-primary btn-lg " onClick={()=>{setCric(cric+6)}}>6</button><br/>
<button type="button" className="btn btn-primary btn-lg " onClick={()=>{setWicket(wicket+1)}}>Wicket</button>&nbsp;
<button type="button" className="btn btn-primary btn-lg " onClick={()=>{setCric(cric+1)}}>Wide Ball</button>&nbsp;
<button type="button" className="btn btn-primary btn-lg " onClick={()=>{setCric(cric+1)}}>No Ball</button><br />&nbsp;
</div>
)
}
export default Cricket;