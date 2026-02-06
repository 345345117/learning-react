import { Link } from "react-router";
import './header.css'
function Name(){
  return (
    <div className="heading">
        <div className="left">
            <Link className="leftside">Logo</Link>

        </div>
        <div className="right">
            <ul className="right-side">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link> </li>
                <li><Link to ="/about" >About</Link></li>
                <li><Link to="/blog">Blogs</Link></li>
                <li><Link to ="login" >Login</Link></li>
            </ul>


        </div>

    </div>
  );
}
export default Name;
