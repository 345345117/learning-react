// function Apps(){
//     let name="dip kumar singh"
//     function fruits(a,b){
//         return a+b;
//     }
//     function sum(){
//         let y=20
//         let x=30
//         return x+y
//     }
//     function operation(a,b,c){
//         if(a==0){
//             return a
//         } else if(b<10){
//             return a+b
//         }

import { useState } from "react";

// import User1 from "./useEffect"

// import { useState } from "react"

// import User from "./Loop2"

// import Dropdown from "./Drop down"

// import Checkbox from "./checkboxes";

// import Controller from "./controller";

//         else{
//             return("This is the number")
//         }
//     }
//     let arr={
//         name:"shristi singh",
//         Roll:20,
//         subject:"nepali",
//         village:"lahan",
//         gemail:"www.gemail.com"

//     }
//     let arr1=[1,2,3,34,4,4,5,5,5]
//     let path="//img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
//    const path1="https://tse2.mm.bing.net/th/id/OIP.zMFqKDHhNFfp6lBVvRXlmAHaGP?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"

//     return(
//         <div>
//             <h1>{name}</h1>
//             <p>{arr.gemail}</p>
//             <h2>{sum()}</h2>
//             <h3>{operation(2)}</h3>
//             <h4>{arr1}</h4>
//             <input type="text" value="Nature"></input>
//             <img
//             src={path}/>

//             <img
//             src={path1}/>

//         </div>
//     )
// }
// export default Apps
// function Apps(){
//     function name(b){
//         alert("apple")
//     }
//     let fruits=(name)=>{
//         alert(name)

//     }

//     return(
//         <div>
//             <h1>Hwllo</h1>

//             <button onClick={()=>fruits("apple")}>summit2</button>

//         </div>
//     )
// }
// export default Apps
// function Apps(){
//     let fruits=(name)=>{
//         alert(name)
//     }

//     return(
//         <div>
//             <h1>First page of my website</h1>
//             <button onClick={()=>fruits("banana")}>sumit</button>
//         </div>
//     )
// }
// export default Apps
// import { useState } from "react"
// function Apple(){

//     let [fruits,setcount]=useState("apple")
//     const name=()=>{
//          setcount="Banana"
//          console.log(fruits)
//     }
//     return(
//         <div>
//             <h1>This is my react website</h1>
//             <h1>{fruits}</h1>
//             <button onClick={()=>name()}>sumit</button>
//         </div>
//     )
// }
// export default Apple
// import { useState } from "react"
// import Name from "./component"

// function Apps(){
//     let [fruits,setCount]=useState("Apple")
//     const call=()=>{
//         setCount("banana")
//     }

//     return(
//         <div>
//             <Name/>

//             <h1>This is my first page</h1>
//             <h1>{fruits}</h1>
//             <button onClick={call}>summit</button>

//         </div>
//     )
// }
// export default Apps

// import { useState } from "react"
// function Apps(){
//     let [display,setupdate]=useState(true)
//     return(
//         <>
//         <button onClick={()=>setupdate(!display)}>toggle</button>
//         {
//             display?<h1>dip singh</h1>:null
//         }
//         </>
//     )
// }
// export default Apps
// import { useState } from "react";
// function Apps()
// {
//     let [islogin,islogout]=useState(false)
//     return(
//         <dev>
//            <button onClick={()=>islogout(true)}>summit</button>
//            {
//             islogin&&<h1>welcome!</h1>
//            }

//         </dev>
//     )

// }
// export default Apps
// import { useState } from "react";
// function Apps(){
//     let [setcount,count ]=useState("loading")
//     let message={
//         loading:"loading....",
//         success:"Data loaded sucessfully",
//         error:"something wrong"

//     }
//     return(
//         <div>
//             <button onClick={()=>count("success")}>success</button>
//             <button onClick={()=>count("error")}>error</button>
//             <h1>{message[setcount]}</h1>

//         </div>
//     )
// }
// // export default Apps
// import Apple from "./component"
// function Apps(){
//     let collage={
//         Name:"bhairahawa multiple",
//         location:"Siddharthnagar",
//         ward:12
//     }
//     let school={
//         Name:"Little star secondary english boarding school",
//         location:"lahan",
//         wardNo:"12"
//     }
//     const hero=["salaman khan","bobydebal"]
//     return(

//         <div>
//          <Apple user={collage}/>
//          <Apple user={school}/>

//         </div>

//     )
// }
// export default App
// import Warap from "./wrapper"
// function User(){
//     return(
//         <div >
//             <Warap > <h2 style={{color:"blue"}}> Dip singh</h2></Warap>
//             <Warap>
//                 <h1>This is react page</h1>
//             </Warap>

//         </div>

//     )
// }
// export default User
// import { useState } from "react"
// function User(){
//     let [setvalue,setcount]=useState("dip singh")

//     return(
//         <div>
//             <h1>This is the React page</h1>
//             <input type="text" value={setvalue}placeholder="enter the number" onChange={(e)=>setcount(e.target.value)}></input>

//             <h1>{setvalue}</h1>
//             <button onClick={()=>setcount("")}>clear</button>

//         </div>
//     )
// }
// export default User
// function Controller(){
//     return(
//         <div>
//             <h1>form handller</h1>

//         </div>

//     )

// }
// export default Controller
// import Controller from "./controller";
// function User(){
//     return(
//         <div>
//             <Controller/>
//         </div>
//     )
// }
// export default User
// import Checkbox from "./checkboxes";import Dropdown from "./Drop down"
// import Dropdown from "./Drop down"
// function User()
// {
//     return(
//         <div>
//             {/* <Checkbox/> */}
//             <Dropdown/>

//         </div>
//     )
// } export default User
// function User(){
//     let userdata =[
//         {
//             Name:"Dip ",
//             age:32,
//             Roll:202,
//             study:"TU"
//         },
//          {
//             Name:"Dipesh",
//             age:43,
//             Roll:203,
//             study:"NEB"
//         }, {
//             Name:"Nanin ",
//             age:34,
//             Roll:201,
//             study:"ioe"
//         }, {
//             Name:"pratik ",
//             age:18,
//             Roll:202,
//             study:"TU"
//         }
//     ]

//     return(
//         <div>
//            <table border={1}>
//             <thead >
//             <tr>
//                 <td>Name</td>
//                 <td>age</td>
//                 <td>Roll</td>
//                 <td>Study</td>
//             </tr>
//            </thead>
//           <tbody>
//             {
//                 userdata.map((item)=>(<tr>
//                     {/* <td>{item.id}</td> */}
//                 <td>{item.Name}</td>
//                 <td>{item.age}</td>
//                 <td>{item.Roll}</td>
//                 <td>{item.study}</td>
//             </tr>))
//             }

//           </tbody>
//            </table>

//         </div>

//     )
// }
// export default User
// import User from "./Loop2"
//  function UserData(){
//     let Apps=[
//         {
//             Name:"Rajesh yadav",
//             Village:"Maheshpur",
//             WardNo:4
//         },
//         {
//             Name:"Pratik shresta",
//             village:"dumkibas",
//             WardNo:5
//         },
//         {
//             Name:"hemant chilwal",
//             Village:"chitwan",
//             Wardno:7

//         }
//     ]
//     return(
//         <div>
//             <h1>component</h1>
//             {
//                 Apps.map((item)=>(
//                     <User data={item}/>
//                 ))
//             }

//         </div>
//     )
//  }
// //  export default UserData
// import User from "./Loop2"

// function Apps(){
//     const collage=[
//         {
//             name:"kathmandu unversity",
//             city:"lagankhel",
//             faculty:"computer engineer",
//             student:[
//                { name:"shivam kumar mandal",
//                 city:"lahan",
//                 school:"Little star secondary boarding school lanhan",},

//                 { name:"Naresh kumar mandal",
//                 city:"haripur",
//                 school:"Applo om secondary boarding school lahan-12"},

//                 { name:"buddha kumar sharma",
//                 city:"bariyarpati",
//                 school:"Little star secondary english boarding school"}

//             ]
//         },
//         {
//             name:"pokhera unversity",
//             city:"pokhera",
//             faculty:"civil engineer",
//             // student:[
//             //    { Name:"Naresh kumar mandal",
//             //     city:"haripur",
//             //     school:"Applo om secondary boarding school lahan-12"}
//             // ]
//         },
//         {
//             name:"Insituate of engineering pulchowk",
//             city:"pulchowk",
//             faculty:"civil engineer",
//         //  student:[
//         //        { Name:"buddha kumar sharma",
//         //         city:"bariyarpati",
//         //         school:"Little star secondary english boarding school"}
//         //     ]
//         }
//     ]
//     return(
//         <div>
//             {
//                 collage.map((detail,index)=>(
//                     <div key={index}>
//                         <h1></h1>
//                         <User data={detail}/>
//                         {/* {
//                             collage.student.map((item)=>(
//                                 <h2>{item.Name}</h2>
//                             ))
//                         } */}

//                     </div>

//                 ))

//             }
//         </div>
//     )
// }
// export default Apps
// import { useEffect, useState } from "react"
// function User(){
//     let [setcount,count]=useState(0)
//     useEffect(()=>{
//         name()
//     } ,[count])
//     function name(){
//         console.log(2+3)
//     }

//     return(
//         <div>
//            <button onClick={()=>count(setcount+1)}>update</button>
//            <h1>setcount:{setcount}</h1>
//         </div>

//     )
// }
// export default User
// import User from "./Loop2"
// function Apps(){
//     let [count,setcount]=useState(0)
//     let[Data,setdata]=useState(5)
//     function name(){
//         console.log("running")
//     }
//     name()

//     return(
//         <div>
//             <h1>conponent and props checking</h1>
//             <buttom onClick={()=>setcount(count+1)}> sumit:{count}</buttom>
//             <button onClick={()=>setfata}

//         </div>
//     )
// }
// export default Apps
// function User(){
//     const name= {
//                 // width: "200px;",
//                  backgroundColor: "#cccc",
//                  height: "200px",
//                  marginLeft:"20px",
//                  display:"flex",
//                      flexDirection: "column",
//                   flexWrap: "nowrap"

//         }
//     return(
//         <div style={name}>
//             <h1 style={{
//                     fontFamily: "sans-serif;",
//                     fontSize: "30px;"

//             }}>user profile</h1>
//             <img src="https://media.istockphoto.com/id/1369629859/photo/a-great-view-up-into-the-trees-direction-sky.jpg?s=1024x1024&w=is&k=20&c=kityXTyRwEAI5SCtAg808VTPMbEsWpSQiLD9ltyhIms=" style={{width:"150px",marginLeft:"4px",border:"4px solid #ccc"}}></img>
//             <p>Name:shristi kumsri singh</p>
//             <span>loves with</span>
//             <div>
//                  <h1 style={{
//                     fontFamily: "sans-serif;",
//                     fontSize: "30px;"

//             }}>user profile</h1>
//             <img src="https://media.istockphoto.com/id/1369629859/photo/a-great-view-up-into-the-trees-direction-sky.jpg?s=1024x1024&w=is&k=20&c=kityXTyRwEAI5SCtAg808VTPMbEsWpSQiLD9ltyhIms=" style={{width:"260px",marginLeft:"4px",border:"4px solid #ccc"}}></img>
//             <p>Name:shristi kumsri singh</p>
//             <span>loves with</span>
//             <div>
//                  <h1 style={{
//                     fontFamily: "sans-serif;",
//                     fontSize: "30px;"

//             }}>user profile</h1>
//             <img src="https://media.istockphoto.com/id/1369629859/photo/a-great-view-up-into-the-trees-direction-sky.jpg?s=1024x1024&w=is&k=20&c=kityXTyRwEAI5SCtAg808VTPMbEsWpSQiLD9ltyhIms=" style={{width:"260px",marginLeft:"4px",border:"4px solid #ccc"}}></img>
//             <p>Name:shristi kumsri singh</p>
//             <span>loves with</span>
//             </div>

//             </div>
//         </div>

//     )
// }
// export default User
function User() {
  return (
    <div style={{display:"flex",flexWrap: "wrap"}}>
      <div
        style={{
          boxShadow: "5px 5px 5px 5px #cccc",
          height: "350px",
          borderRadius: "10px",
        }}
       >
        <div>
          <h1>Children</h1>
          <img
            src="https://images.unsplash.com/photo-1506958933531-3dfb8a27542f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "200px" }}
          ></img>
        </div>
        <div>
          <span>Name:Dip kumar singh</span>
          <div>
               <span>Job:software developer</span>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "5px 5px 5px 5px #cccc",
          height: "350px",
          borderRadius: "10px",
        }}
       >
        <div>
          <h1>Children</h1>
          <img
            src="https://images.unsplash.com/photo-1506958933531-3dfb8a27542f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "200px" }}
          ></img>
        </div>
        <div>
          <span>Name:Dip kumar singh</span>
          <div>
               <span>Job:software developer</span>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "5px 5px 5px 5px #cccc",
          height: "350px",
          borderRadius: "10px",
        }}
       >
        <div>
          <h1>Children</h1>
          <img
            src="https://images.unsplash.com/photo-1506958933531-3dfb8a27542f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "200px" }}
          ></img>
        </div>
        <div>
          <span>Name:Dip kumar singh</span>
          <div>
               <span>Job:software developer</span>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "5px 5px 5px 5px #cccc",
          height: "350px",
          borderRadius: "10px",
        }}
       >
        <div>
          <h1>Children</h1>
          <img
            src="https://images.unsplash.com/photo-1506958933531-3dfb8a27542f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "200px" }}
          ></img>
        </div>
        <div>
          <span>Name:Dip kumar singh</span>
          <div>
               <span>Job:software developer</span>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "5px 5px 5px 5px #cccc",
          height: "350px",
          borderRadius: "10px",
        }}
       >
        <div>
          <h1>Children</h1>
          <img
            src="https://images.unsplash.com/photo-1506958933531-3dfb8a27542f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "200px" }}
          ></img>
        </div>
        <div>
          <span>Name:Dip kumar singh</span>
          <div>
               <span>Job:software developer</span>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "5px 5px 5px 5px #cccc",
          height: "350px",
          borderRadius: "10px",
        }}
       >
        <div>
          <h1>Children</h1>
          <img
            src="https://images.unsplash.com/photo-1506958933531-3dfb8a27542f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "200px" }}
          ></img>
        </div>
        <div>
          <span>Name:Dip kumar singh</span>
          <div>
               <span>Job:software developer</span>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "5px 5px 5px 5px #cccc",
          height: "350px",
          borderRadius: "10px",
        }}
       >
        <div>
          <h1>Children</h1>
          <img
            src="https://images.unsplash.com/photo-1506958933531-3dfb8a27542f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "200px" }}
          ></img>
        </div>
        <div>
          <span>Name:Dip kumar singh</span>
          <div>
               <span>Job:software developer</span>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "5px 5px 5px 5px #cccc",
          height: "350px",
          borderRadius: "10px",
        }}
       >
        <div>
          <h1>Children</h1>
          <img
            src="https://images.unsplash.com/photo-1506958933531-3dfb8a27542f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "200px" }}
          ></img>
        </div>
        <div>
          <span>Name:Dip kumar singh</span>
          <div>
               <span>Job:software developer</span>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: "5px 5px 5px 5px #cccc",
          height: "350px",
          borderRadius: "10px",
        }}
       >
        <div>
          <h1>Children</h1>
          <img
            src="https://images.unsplash.com/photo-1506958933531-3dfb8a27542f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "200px" }}
          ></img>
        </div>
        <div>
          <span>Name:Dip kumar singh</span>
          <div>
               <span>Job:software developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
