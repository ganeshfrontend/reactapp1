import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
function Quiz(){
function start(){

}
return(
<div align="center">
   <h1> Quiz App</h1>
<h5>Number of Questions</h5>
<input type="number" /><br />
<h5>Category</h5>
<select>
<option value="1">Sports</option>
<option value="2">Politics</option>
<option value="3">History</option>
</select><br /><br />
<h5>Select Difficulty</h5>
<select>
<option value="1">Medium</option>
<option value="2">Easy</option>
<option value="3">Hard</option>
</select><br /><br />
<div className="d-grid gap-2 col-3 mx-auto">
<button type="button" className="btn btn-warning" onClick={start}>Start</button>
</div>
</div>
)
}
export default Quiz;