import React from "react";
import Prop from "./Props";

function Counter(){
var [i,setI]=React.useState(1)
function inc(){
setI(i+1)
}
function dec(){
setI(i-1)
   }
   
return(
<div className="mybox">
<h1>Counter:{i}</h1>
<button onClick={()=>{inc()}} >Increment</button>
<button onClick={()=>{dec()}}>Decrement</button>

<Prop title="Frontend" courses={["Reactjs","Angular","Html","Css"]} >  </Prop>
<Prop title="Backend" courses={["Nodejs","Java"]}>  </Prop>
<Prop title="AndroidDeveloper" courses={["Javascript","Java"]}>  </Prop>
<Prop title="Ios Developer" courses={["swift","Java"]}>  </Prop>
</div>

)
}
export default Counter;