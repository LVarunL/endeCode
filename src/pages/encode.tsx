import { useState } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../config/firebase";


export const Encode = () => {
    const [messageToAdd,setMessageToAdd] = useState("");
    const getmessage=(data:any)=>{
        setMessageToAdd(data.target.value);
    }
    const messageref = collection(db, "messages"); 

    const Storemessage = async ()=>{
        await addDoc(collection(db,"messages"), {
            message: messageToAdd
        })
    }
        
    return (
        <div className="encode">
        <div className="encodeInput">
            <textarea placeholder="enter your message here..." onChange={getmessage}/>
            <h2>{messageToAdd}</h2>
            {/* <button onClick={()=> Storemessage}>enter</button> */}
            <button onClick={Storemessage}> submit</button>
        </div>
        </div>
    )
}