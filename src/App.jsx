import { useActionState } from "react"

function User(){
    // let [data,action,pending]=useActionState(handling)
    let handling=function(preventive,formData){
        let user=formData.get("userName")
        let password =formData.get("password")
        console.log(user,password)

        if(user && password){
            return{message:"form should be summited"}
        }
        else{
            return{error:"some thing should be wrong"}
        }
        
        

    }
     let [data,action,pending]=useActionState(handling)

    return(
        <div>
            <h1>Heading the  form</h1>
            <form action={action}>
//                 <input type="text" placeholder="enter the name" name="userName"></input>
//                 <br></br>
//                 <input type="password" placeholder="enter password" name="password"></input><br></br>
//                 <button disabled={pending}>summit</button>
//                 {
//                     data?.error && <span style={{color:"red"}}>{data?.error}</span>
//                 }
//                 {
//                     data?.message && <span style={{color:"blue"}}>{data?.message}</span>
//                 }
//             </form>

//         </div>
//     )
// } export default User

