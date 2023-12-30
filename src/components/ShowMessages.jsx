import React, { useEffect, useState } from 'react';
import { doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";



const ShowMessages = () => {
    const [messages, setMessages] = useState([]);
    const allMessage = collection(db, "messages");
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const [val, setVal] = useState([])

    const handleAuthenticate = () => {
        if (password === import.meta.env.VITE_PASSWORD) {
            setAuthenticated(true);
        } else {
            alert('Authentication failed. Incorrect password.');
        }
    };


    useEffect(() => {
        if (authenticated) {
            const getMessage = async () => {
                const dbVal = await getDocs(allMessage)
                setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            }
            getMessage()
        }
    }, [authenticated]);

    return (
        <>
            {!authenticated ? (
                <div>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <button onClick={handleAuthenticate}>Authenticate</button>
                </div>
            ) : (
                <div>
                    <h1>All Messages to Uthsob</h1>
                    <div className="card-section">
                        {val.map((allMessage) => (
                            <div key={allMessage.id} className="card-container">
                                <h3>@Anonymous</h3>
                                <p>{allMessage.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ShowMessages;
