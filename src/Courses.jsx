import React from "react";
function Courses(){
var [courses,setCourses]=React.useState(["ReactJs","Angular","NodeJs","Javascript"])
return(
<div>
<ul>
{
    courses.map(function(c){
    return <li>{c}</li>
    })
}
</ul>
</div>
)
}
export default Courses;