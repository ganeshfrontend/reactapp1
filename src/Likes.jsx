import React from "react";
function Likes(){
var [l,setL]=React.useState(0)
var [dl,setDl]=React.useState(0)
    
return(
<div>
<h3>Likes and Dislikes with button</h3>
<button onClick={()=>{setL(l+1)}} type="button" class="btn btn-warning">Likes</button>&nbsp;&nbsp;&nbsp;{l} <br /><br />
<button onClick={()=>{setDl(dl+1)}} type="button" class="btn btn-danger">Dislikes</button>&nbsp;&nbsp;&nbsp;{dl}

</div>
)

}
export default Likes;