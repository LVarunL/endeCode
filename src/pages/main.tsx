import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";


export const Main = () => {

    const navigate = useNavigate();
    const logOut = async() => {
        await signOut(auth);
        navigate("/");
    }
    const [user]=useAuthState(auth);
    return (
        <div>
        <div>
            Home page
            <p> Welcome, {user?.displayName} </p>
        </div>

        {
            user && 
            <div className="user">
                <button onClick={logOut}> Log Out</button>
            </div>
        }
        </div>
    )
}