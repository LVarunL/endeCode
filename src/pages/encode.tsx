import { useState } from "react";
import { addDoc, collection} from "firebase/firestore";
import { db } from "../config/firebase";


export const Encode = () => {
    const [messageToAdd,setMessageToAdd] = useState("");
    const [pw, setPassword] = useState("");
    const [messageId, setMassageId] = useState("");
    const getmessage=(data:any)=>{
        setMessageToAdd(data.target.value);
    }

    const handlePassword=(data:any)=>{
        setPassword(data.target.value);
    }
    const storeMessage = async ()=>{
        const addedDoc = await addDoc(collection(db,"messages"), {
            message: messageToAdd,
            password: pw
        })
        setMassageId(addedDoc.id);
        
    }
        
    return (
        <div className="encode">
        <div className="encodeInput">
            <textarea placeholder="enter your message here..." onChange={getmessage}/>
            <input onChange={handlePassword} type="password" placeholder="password..."/>
            <h2>{messageToAdd}</h2>
            {/* <button onClick={()=> Storemessage}>enter</button> */}
            <button onClick={storeMessage}> submit</button>
            <h2> {messageId} </h2>
        </div>
        </div>
    )
}