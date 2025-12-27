import style from "./User.module.css"
function User() {
  return (
    <div style={{display:"flex",flexWrap: "wrap"}}>
      <div className={style.container} >
        <div>
          <h1 className={style.heading}>Children</h1>
          <img
            src="https://images.unsplash.com/photo-1506958933531-3dfb8a27542f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ width: "200px" }}
          ></img>
        </div>
        <div>
          <span>Name:Dip kumar singh</span>
        </div>
        <div>
          <span>job:software devloper</span>
        </div>
       </div> 
    </div>
  );
}
export default User;
import styled from "styled-components"
function Apps(){


   let Name=styled.h1`
   color:red;
   `
let Btn=styled.button({
   color:"#e19898cc",
   backgroundColor:"darkblue",
   fontFamily:"sans-serif",
   fontWeight:"bold"

})

  
  
   return(
      <div>
         <Name> dipsingh</Name>
         <Btn>Login</Btn>
         <Btn>Signup</Btn>
        

      </div>
   )
} export default Apps

