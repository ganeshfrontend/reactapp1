import React, { useEffect, useState } from "react";
import axios from "axios";
function Books(){
var [books,setBooks]=useState([])
var [newbook,setNewbook]=useState({title:"",author:""})
var [editFlag,setEditFlag]=useState(false)
var [selectedBook,setSelectedBook]=useState(null)
useEffect(()=>{
       getUI() 
},[])
function add(){
    axios.post("http://localhost:4000/books/",newbook).then(function(res){
        console.log(res)
        getUI();
    })
}
function getUI(){
    axios.get("http://localhost:4000/books").then(function(response){
        console.log(response.data)
        setBooks([...response.data])
})
}
function del(id){
   axios.delete("http://localhost:4000/books/"+id).then(function(){
    alert("deleted...")
       getUI()
    })
}
function edit(b){
setSelectedBook({...b})
setEditFlag(true)
}
function update(){
    axios.put("http://localhost:4000/books/"+selectedBook.id,selectedBook).then(function(){
        alert("updated...")
        getUI()
    })
}
return(
<div>
    <h1 style={{color:"red"}}>Books</h1>
    {
        !editFlag &&( 
        <div>
        <input type="text"className="input textcolor "  placeholder="Enter Title"  onChange={(event)=>{setNewbook({...newbook,title:event.target.value})}}/><br />
        <input type="text" className="input textcolor" placeholder="Enter Author"  onChange={(event)=>{setNewbook({...newbook,author:event.target.value})}}/><br />
        offline:
        <input type="radio" name="book"  value="offline" onChange={(event)=>{setNewbook({...newbook,offline:event.target.value})}} />&nbsp;
        printedBook:
        <input type="radio" name="book" value="printedBook" onChange={(event)=>{setNewbook({...newbook,printedBook:event.target.value})}} /><br />
        <button className="button" onClick={()=>{add()}}>Add Data</button>
       </div>
       )
     
    }

   {
    editFlag &&(
   <div>
  <input type="text" className="input textcolor"  placeholder="Enter Title"   value={selectedBook.title}  onChange={(event)=>{setSelectedBook({...selectedBook,title:event.target.value})}}/><br />
   <input type="text" className="input textcolor" placeholder="Enter Author" value={selectedBook.author}  onChange={(event)=>{setSelectedBook({...selectedBook,author:event.target.value})}}/><br />
   <button className="button" onClick={()=>{update()}}>updated data</button>
   </div>
)
}
<ul id="class">
{
books.length>0&& books.map(function(b,i){
    return <li key={i} className="li">
        <h3>{b.id}.{b.title}</h3>
        <h4>{b.author}</h4>
        <button onClick={()=>{del(b.id)}} className="lidelete">delete</button>&nbsp;&nbsp;  
        <button onClick={()=>{edit(b)}} className="liedit">Edit</button>
        </li>
})
}
</ul>
</div>

)
}
export default Books;