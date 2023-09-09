import React from "react";
import  {useFormik} from "formik";
import * as Yup from 'yup';

function Form(){
var myform=useFormik({
initialValues:{
firstname:"",
email:"",
lastname:"",
password:""
},
validationSchema: Yup.object({
    firstname: Yup.string().required('Firstname Required'),
    email: Yup.string().email().required('Email Required'),
    lastname: Yup.string().required('lastname Required'),
    password: Yup.string().required('password Required')

  }),
  
onSubmit:(x)=>{
console.log(x)
}
})
return(
<div>
<h1>ReactForm</h1>
<form onSubmit={myform.handleSubmit}>
Firstname:
<input type="text" name="firstname" onChange={myform.handleChange} />
<b >{myform.touched.firstname && myform.errors && myform.errors.firstname}</b><br />
Email:
<input type="text" name="email" onChange={myform.handleChange}/>
<b>{myform.touched.email && myform.errors && myform.errors.email}</b><br />
Lastname:
<input type="text" name="lastname" onChange={myform.handleChange}/>
<b >{myform.touched.lastname && myform.errors && myform.errors.lastname}</b><br />
Password:
<input type="text" name="password" onChange={myform.handleChange}/>
<b >{myform.touched.password && myform.errors && myform.errors.password}</b><br />

<button type="submit">Submit</button>
</form>
</div>
)
}
export default Form;