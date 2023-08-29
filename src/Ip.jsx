import React from 'react';
function Team(props){
return(
<div  className='tarun'>
    <h1 >{props.teamname}</h1>
    {props.players.map((player)=>{
        return <li>{player}</li>
    })}
</div>
)
}
export default Team;