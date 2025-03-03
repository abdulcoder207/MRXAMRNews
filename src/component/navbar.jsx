import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar(){
    return(
        <div className="navbar">
            <h1>Mr Xamr News</h1>
            <div className="link">
                <ul>
                    <li><Link to="/" className="a">Home</Link></li>
                    <li><Link to="/about" className="a">About</Link></li>
                    <li><Link to="/news" className="a">News</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar