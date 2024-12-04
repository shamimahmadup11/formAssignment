
import "./Navbar.css"
const Navbar = () => {
  return (
  
        <nav className="navbar">

            <div className="subnavbar">
                <div className="">logo</div>
                <ul className="navbarItems">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About us</li>
                    <li> Blogs</li>
                                    
                 </ul>

                 <div>
                    <button className="button">Signin</button>
                 </div>

            </div>
        </nav>
  )
}

export default Navbar
