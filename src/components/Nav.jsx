import {Link} from "react-router-dom"
import "../nav.css"

const Nav = ()=>{
    return(
        <>
        <div className = "navdiv">
            <h4 >Employee Details</h4>
            <Link className="homeL" to = "/">Home</Link>
            <Link className="homeL" to = "/post">post</Link>
            <Link className = "homeL" to = "/login">Login</Link>
        </div>
        </>
    )
}

export default Nav