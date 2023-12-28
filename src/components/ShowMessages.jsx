import React, { useEffect, useState } from 'react';
import { doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";



const ShowMessages = () => {
    const [messages, setMessages] = useState([]);
    const allMessage = collection(db, "messages");

    const [val, setVal] = useState([])

    useEffect(() => {
        const getMessage = async () => {
            const dbVal = await getDocs(allMessage)
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getMessage()
    }, []);

    return (
        <>

            <h1>All Messages to Uthsob</h1>
            <div className='card-section'>
                {val.map((allMessage) => (

                    <div key={allMessage.id} className='card-container'>

                        <h3>@Anonymous</h3>
                        <p>{allMessage.text}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ShowMessages;
