// import Child from "./Child"
// import Baby from "./Sharing"
// import { useState } from "react"

import { useState } from "react"


//  function Apps(){
//        let [use,setuse]=useState("")

//     return(
//         <div>
//             <h1>This is Apps</h1>
//             <Baby data={setuse}/>
//             <Child user={use} />
//         </div>

//     )

//  }
//  export d{
//
function Apps(){
    let [use,setuse]=useState({
        name:"dip kumar singh ",
        RollNo:22,
        subject:"computer science ",
        adress:{

            city:"patrari bazzar"
        }
    })
    function handler(val){
        use.adress.city=val

        
        setuse({...use,adress:{...use.adress,city}})
        console.log(use)

    
    

        
        
       

    }

    return(
       <div>
         <h1>update the object</h1>
         <input type="text" placeholder="update the user name"
         onChange={(e)=>handler(e.target.value)}></input>
         <h2>name:{use.name}</h2>
         <h3>Rollno:{use.RollNo}</h3>
         <h4>subject:{use.subject}</h4>
         <h5>adress:{use.adress.city}</h5>
       </div>
    
    )
}
export default Apps
