import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

interface CreateFormData{
    message: string;
}
export const Encode = () => {
    const [messageToAdd,setMessageToAdd] = useState("");
    const getmessage=(data:any)=>{
        setMessageToAdd(data.target.value);
    }
    const messageref = collection(db, "messages"); 

    const Storemessage = async()=>{
        await addDoc(collection(messageref,"messsages"), {
            message: messageToAdd
        })
    }
        
    return (
        <form onSubmit={()=>Storemessage}>
        <div className="encode">
        <div className="encodeInput">
            <textarea placeholder="enter your message here..." onChange={getmessage}/>
            <h2>{messageToAdd}</h2>
            {/* <button onClick={()=> Storemessage}>enter</button> */}
            <input type="submit"/>
        </div>
        </div>
        </form>
    )
}