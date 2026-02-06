import { Routes,Route } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Blogs from "./Blogs";
import Login from "./Login";
import Name from "./Navbar";

function User() {
  return (
    <div>
        <Name/>

   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default User;
