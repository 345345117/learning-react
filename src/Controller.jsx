import { useState } from "react"

function Controller()
{
    let[name,setname]=useState("dip singh")
    let[password,setpassword]=useState()
    let[gamil,setgamil]=useState()
    return(
        <div>
            <h1>controller component</h1>
            <form>
                <input type="text" placeholder="Name" onChange={(event)=>setname(event.target.value)}></input>
                <br></br>
                <input type="text" placeholder="passwprd" onChange={(event)=>setpassword(event.target.value)}></input>
                <br>
                </br>
                <input type="text"placeholder="gmail" onChange={(event)=>setgamil(event.target.value)}></input>
                <h1>{name}</h1>
                <h1>{password}</h1>
                <h1>{gamil}</h1>

            </form>

        </div>
    )
}
export default Controller