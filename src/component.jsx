// import { useState } from "react"

// let  Name=()=>{
//     let [initial,updatedcount]=useState(0)
   
      
//     return(
//         <div>
//            <h1>update:{initial}</h1>
//            <button onClick={()=>updatedcount(initial+1)}>up grade</button>


//         </div>

//     )
// }
// export default Name
function Apple({user}){

    return(
        <div>
            <h1>{user.Name}</h1>
            <h2>{user.location}</h2>
            <h3>{user.ward}</h3>
            <hr></hr>
            
            

            
        

        </div>

    )
}
export default Apple