import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";


export const Decode = () => {
    const [messageID, setMessageID] = useState("");
    const [pw, setPW] = useState("");

    const changeMessage=(data: any)=>{
        setMessageID(data.target.value);
    }

    const addPW=(data:any)=>{
        setPW(data.target.value);
    }

    const searchID=async()=>{
        const docRef = doc(db,"messages" ,messageID);
        const docSnap = await getDoc(docRef);
        const flag = "";
        console.log(docSnap.data);

        return (
            <div> 
                    
            </div>
        )
    }

    return (

        <div className="pages">
            <input type="text" onChange={changeMessage} placeholder="enter secret message..."/>
            <p> {messageID}</p>
            <input type="password" onChange={addPW} placeholder="enter password..."/>
            <button> search </button>
        </div>
    )
}