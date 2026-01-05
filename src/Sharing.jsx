


function Baby({data}){
    
    
   

     return(
        <div>
            <h1>Adduser </h1>
            <input type="text" onChange={(event)=> data(event.target.value)} style={{border:"2px solid red"}}></input>
            <hr></hr>



        </div>
    )
}
export default Baby