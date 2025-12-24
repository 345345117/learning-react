import { useState } from "react"

function Checkbox()
// let [setskill,outskill]= useState([])
{
    let [setskill,outskill]= useState([])
    let handskill=(event)=>{
        console.log(event.target.value, event.target.checked)
            if(event.target.checked){
        outskill([...setskill,event.target.value])
        else{
            outskill([...setskill.filter{(iitem)=>}])
        }
    }
    }
    

    return(
        <div>
            <h1>This is selection pattern</h1>
            <input type="checkbox"  onChange ={handskill} id="php" value="php"></input>
            <label htmlFor="php">PHP</label>
            <br></br>
            <input  onChange ={handskill} type="checkbox" id="python" value="python"></input>
            <label htmlFor="python">python</label>
            <br></br>
            <input onChange ={handskill} type="checkbox" id="c+" value="c+"></input>
            <label htmlFor="c+">C+</label>
            <br></br>
            <input onChange ={handskill} type="checkbox" id="java" value="java"></input>
            <label htmlFor="java">java</label>
            <h1>{setskill}</h1>

        </div>
    )
}
export default Checkbox