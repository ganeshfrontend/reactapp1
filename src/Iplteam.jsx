import React from 'react';
function Iplteam(){
var [teams,setTeams]=React.useState([
{
teamname:"MumbaiIndians",
players:[
"Rohit",
"Malinga",
"SuryaKumar Yadav",
"Ishan Kishan",
"Tim David",
"Tilak Varma"
]
},
{
teamname:"Chennai SuperKings",
players:[
"Dhoni",
"RavindraJadeja",
"Ruturaj Gaikward",
"Ramabti Rayudu",
"Pathirana"
]
},
{
teamname:"RoyalChallengersBangalore",
players:[
    "Virat Kohli",
    "Dinesh Karthik",
    "ABDevillers",
    "ChrisGayle"
]
}
])
return(
<div className='tarun'>
<h1>Ipl Teams:</h1>
<ul>
{
teams.map((team)=>{
return <li className='tarun'><h3>{team.teamname}</h3></li>
})
}
</ul>
</div>
)
}
export default Iplteam;