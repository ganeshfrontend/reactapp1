import React, { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function Products(){
const [products,setProducts]=React.useState([])
useEffect(function(){
axios.get("https://fakestoreapi.com/products").then(function(response){
console.log(response.data)
setProducts([...response.data])
})
},[])
function addcart(){
const [cart,SetCart]=React.useState([])
SetCart([...cart])
}
return(
     <div>

      {
      <ul className="d-flex flex-wrap">
      {
       products.length >0 && products.map(function(p){
       return <div className="mybox"> 
       <div className="card " style={{width:"18rem"}}>
        <img src={p.image} className="card-img-top" />
        <div className="card-body">
          <h5>{p.title}</h5>
          <h5>Price:{p.price}</h5>
          <button onClick={addcart}>Addto Cart</button>
        </div>
      </div>
      </div>
       })
      }
      </ul>
        
      }
      <div>
        {
          cart.length>0 && cart.map(function(c){
            return <li>{c.title}</li>
          })
        }
      </div>
      </div> 
   
)
}
export default Products;