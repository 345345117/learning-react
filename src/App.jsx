// import Child from "./Child"
// import Baby from "./Sharing"
// import { useState } from "react"
//
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
// setuse(student.filter(name=>name!=="sita"))

// student.map( )
//  function User(){
//     let [data,setdata]=useState(["dip","singh","kumar"])
//     let [user,setuser]=userS
//     function apps(){
//         let newdata=[...data];
//         setdata(newdata.slice(0,newdata.length-1))
//         console.log(newdata)

//     }

//     return(<div>
//         <h1>This is the arry update</h1>
//         <input type="text" onChange={(e)=>apps(e.target.value)} placeholder="enter the userName"></input>

//         {
//             data.map((item,index)=>{
//                 return <h1 key={index}>{item}</h1>
//             })
//         }

//     </div>)
//  }
//  export default Us
import { useActionState } from "react";
function User() {
  // let [data,action,pending]=useActionState(handling())
  let handling = async (prevention, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((res) => setTimeout(res, 2000));
    console.log(name, password);
    if(name && password){
        return{message:"message should be sumitted"}
    }
    else{
        return{error:"message should be error"}
    }
   
  

  };
   
  
  let [data, action, pending] = useActionState(handling,undefined);
 
  return (
    <div>
      <h1>This is form handling</h1>
      <form action={action}>
        <input placeholder="enter userNmae" name="name"></input>
        <br></br>
        <input placeholder="password" name="password"></input>
        <br></br>
        <button disabled={pending}>summit</button>
        {
            data?.error && <span style={{color:"blue"}}>{data?.error}</span>
        }
         {
            data?.message && <span style={{color:"red"}}>{data?.message}</span>
        }
      </form>

    </div>
  );
}
export default User;
