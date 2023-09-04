import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
function Form(){
return(
<div className="input-group input-group-lg">
<form onSubmit="event.preventDefault()" >
<h1>Form Validations:</h1>
<input type="text" name="username" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="username"  />
<br /><br />
Password:
<input type="text" name="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"  placeholder="password"/>
<br/>
<button type="submit" className="btn btn-primary btn-lg">Save</button>
</form>
</div>
)
}
export default Form;