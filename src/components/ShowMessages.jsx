import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';

const ShowMessages = () => {
    const [val, setVal] = useState([]);
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleAuthenticate = () => {
        if (password === import.meta.env.VITE_PASSWORD) {
            setAuthenticated(true);
        } else {
            alert('Authentication failed. Incorrect password.');
        }
    };

    useEffect(() => {
        if (authenticated) {
            const getMessages = async () => {
                const { data, error } = await supabase
                    .from('messages')
                    .select('*');

                if (error) {
                    console.error('Error fetching messages:', error.message);
                    return;
                }

                setVal(data);
            };
            getMessages();
        }
    }, [authenticated]);

    return (
        <>
            {!authenticated ? (
                <div className="authbox">
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="auth-input"
                        />
                    </label>
                    <button onClick={handleAuthenticate}>Authenticate</button>
                </div>
            ) : (
                <div>
                    <h1>All Messages to Uthsob</h1>
                    <div className="card-section">
                        {val.map((message) => (
                            <div key={message.id} className="card-container">
                                <h3>@Anonymous</h3>
                                <p>{message.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ShowMessages;
