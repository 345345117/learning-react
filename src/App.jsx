import { BrowserRouter,Routes,Route,Link } from "react-router";
function Apps(){
    return(
        <div>
            <BrowserRouter>
            <Link to="/ home ">Home</Link>
            <Link to="/ contact">Contact</Link>
            <Link to="/ about">About</Link>

            <Routes>
                <Route path="/ home " element={<h1>Home</h1>}/>
                <Route path="/ contact" element={<h2>Contact</h2>}/>
                <Route path ="/ about" element={<h3>About</h3>}/>

            </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Apps
