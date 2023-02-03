import { useState } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../config/firebase";


export const Encode = () => {
    const [messageToAdd,setMessageToAdd] = useState("");
    const [pw, setPassword] = useState("");
    const getmessage=(data:any)=>{
        setMessageToAdd(data.target.value);
    }
    const messageref = collection(db, "messages"); 
    const handlePassword=(data:any)=>{
        setPassword(data.target.value);
    }
    const storeMessage = async ()=>{
        await addDoc(collection(db,"messages"), {
            message: messageToAdd,
            password: pw
        })
    }
        
    return (
        <div className="encode">
        <div className="encodeInput">
            <textarea placeholder="enter your message here..." onChange={getmessage}/>
            <input onChange={handlePassword} type="password" placeholder="password"/>
            <h2>{messageToAdd}</h2>
            {/* <button onClick={()=> Storemessage}>enter</button> */}
            <button onClick={storeMessage}> submit</button>
        </div>
        </div>
    )
}