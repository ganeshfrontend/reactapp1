import React from "react";
function Ref(){
var firstnameRef=React.useRef()
var lastnameRef=React.useRef()

React.useEffect(function(){
firstnameRef.current.focus()
},[])

function lastfocus(e){
if(e.key==="Enter"){
lastnameRef.current.focus()

}
}
return(
<div className="mybox">

<input type="text"  ref={firstnameRef} onKeyUp={(e)=>{lastfocus(e)}}/><br/><br/>
<input type="text"  ref={lastnameRef} /><br/><br/>
<button>Submit</button>

</div>
)
}
export default Ref;