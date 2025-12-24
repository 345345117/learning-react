const User=({data})=>{
    return(
        <div style={{border:"2px solid skyblue",background:"skyblue",borderBottom:"5px solid skyblue",margin:"30px"}}>
            <h1>{data.name}</h1>
            <ul>
                <li>
                    {data.city}
                </li>
                <li>
                    {data.faculty}
                </li>
                <li>
                        {
                            data.student.map((item)=>(
                                <h1>{item.Name}</h1>
                            ))
                        }
                    
                </li>
            </ul>
            {
                
            }

        </div>
    )
}
export default User