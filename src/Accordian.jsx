import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
function Accordian(){
var [d,setD]=React.useState([
"Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
"Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
"Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
"Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
""
])
function bu(){

}
return(
<div>
<h6 className="mybox1">Do I have to allow the use of cookies? <button onClick={bu}>+</button></h6>
<h6 className="mybox1">How do I change my My Page password?<button>+</button></h6>
<h6 className="mybox1">What is BankID?<button>+</button></h6>
<h6 className="mybox1">Whose birth number can I use?<button>+</button></h6>    
<h6 className="mybox1">When do I recieve a password ordered by letter?<button>+</button></h6>    
</div>
)
}
export default Accordian;