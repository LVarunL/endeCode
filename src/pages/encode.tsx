import { useState } from "react";
import { addDoc, collection} from "firebase/firestore";
import { db } from "../config/firebase";


export const Encode = () => {
    const [wantToEncode,setWantToEncode] = useState(true);
    const [messageToAdd,setMessageToAdd] = useState("");
    const [pw, setPassword] = useState("");
    const [messageId, setMessageId] = useState("");
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
        setMessageId(addedDoc.id);
        setWantToEncode(false);
    }

    const encodeAgain = () => {
        setWantToEncode(true);
    }
        
    return (
        <div className="encode">
        <div className="encodeInput">
            {
                wantToEncode? 
                <>
                    <textarea placeholder="enter your message here..." onChange={getmessage}/>
                    <input onChange={handlePassword} type="password" placeholder="password"/>
                    <h2>{messageToAdd}</h2>
                    {/* <button onClick={()=> Storemessage}>enter</button> */}
                    <button onClick={storeMessage}> submit</button>

                </> 
                
                : 
                <>
                    <div>
                        <h2> {messageId} </h2>
                        <button onClick={encodeAgain}> Encode Another </button>
                    </div>
                </>
            }   
        </div>
        </div>
    )
}