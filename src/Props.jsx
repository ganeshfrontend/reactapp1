import React from "react";
function Prop(props){
var title=props.title
var courses=props.courses
return(
<div>
<h3 className="title">{title}:</h3>
{
<ol className="ol">
{
courses.map((c)=>{
    return <li>{c}</li>
})
}
</ol>
}
</div>
)
}
export default Prop;