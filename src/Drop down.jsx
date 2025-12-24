import { useState } from "react"

function Dropdown(){
    let [setdrop,setdown]=useState("")
    let setvalue=()=>{
        console.log()
    }
    return(
        <div>
            <h1>selection the gender</h1>
            <h4>Dropdown handling</h4>
            <input onChange={(e)=>setdown(e.target.value)} type="radio" id="Male"  value={"Male"} name="name"></input>
            <label htmlFor="Male">Male</label>
             <input  onChange={(e)=>setdown(e.target.value)} type="radio" id="female" name="name" value={"female"}></input>
            <label htmlFor="female">Female</label>
            <input  onChange={(e)=>setdown(e.target.value)} type="radio" id="other" name="name" value={"other"}></input>
            <label htmlFor="female">other</label>
            <h5>Necessary to chosen: {setdrop}</h5>

        </div>
    )
}
export default Dropdown