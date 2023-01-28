import {Link} from "react-router-dom"
import { auth } from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
export const Navbar = () => {
   
    const [user] = useAuthState(auth);
    return (
        <div className="navbar">
           
            <Link to="/" className="links" >Home  </Link>
            {
                !user ? 
                <Link to="/login" className="links">Login  </Link> :
                <>
                    <Link to="/encode" className="links">Encode  </Link>
                    <Link to="/decode" className="links">Decode   </Link> 
                    <Link to="/feedback" className="links">Feedback </Link>
                </>
            }
            
            <Link to="/help" className="links">Help  </Link>
            {
                user && 
                <div className="user">
                    
                    <img src={user?.photoURL || ""} width="100" height="100"/>
                </div>
            }
            
        </div>
    )
}