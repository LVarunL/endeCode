import { doc, getDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, query, where } from "firebase/firestore";


export const Decode = () => {
    const [messageID, setMessageID] = useState("");
    const [pw, setPW] = useState("");
    const [msg, displaydata] = useState();

    const changeMessage=(event:any )=>{
        setMessageID(event.target.value);
    }

    const addPW=(data:any)=>{
        setPW(data.target.value);
    }

    const searching = collection(db, "messages");

    const searchID=async()=>{
        const docRef = doc(db, "messages", messageID);
        console.log(messageID);
        const docSnap = await getDoc(docRef);

        try {
            const docSnap = await getDoc(docRef);
            console.log("hi");
            //console.log(docSnap.data());
            if(docSnap.exists()) {
                console.log("hi");
                console.log(docSnap.data());
                const dd:any = docSnap.data();
                displaydata(dd.message);
            } else {
                console.log("Document does not exist")
            }
        
        } catch(error) {
            console.log(error)
        }

        //const docRef = doc(db,"messages" ,messageID);
        //const docSnap = await getDoc(docRef);
        const flag = "";
        console.log(docSnap.data());

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
            <button onClick={searchID}> search </button>
            <h1>{msg}</h1>
        </div>
    )
}