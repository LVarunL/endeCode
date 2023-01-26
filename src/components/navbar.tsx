import {Link} from "react-router-dom"
export const Navbar = () => {

    return (
        <div>
            <Link to="/">Home  </Link>
            <Link to="/encode">Encode  </Link>
            <Link to="/decode">Decode   </Link>
            <Link to="/login">Login  </Link>
            <Link to="/help">Help  </Link>
        </div>
    )
}