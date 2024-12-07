import React, { useState } from 'react';
import { supabase } from '../supabase';

const SendMessage = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = async () => {
        if (message.trim() === '') {
            alert('Cannot send blank message.');
            return;
        }
        try {
            const { error } = await supabase
                .from('messages')
                .insert([{ text: message }]);

            if (error) throw error;

            setMessage('');
            alert('Message Sent. Thanks for your kind words. Means a lot...');
        } catch (error) {
            console.error('Error sending message:', error.message);
        }
    };

    return (
        <div className="infoText">
            <h1>Uro Chithi Bakso (উড়ো চিঠি বাক্স)📮</h1>
            <h2>Anonymous Letter Box</h2>
            <p>
                Howdy, it's <span>@uthsob_cb</span>. It's time for <span>year ending survey</span> I’m looking to improve and grow! If we met or talked this year, I’d really appreciate your honest thoughts. <br />
                Share any feedback, advice, or areas where you think I could do better.
                <br />Your input means a lot and will help me improve!</p>

            <span>Sender info will be Anonymous! So Please feel free to send what you wanted to tell me.</span>
            <textarea
                name="chithibox"
                cols="50"
                rows="10"
                placeholder="Start Writing Chithi..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={handleSendMessage}>Send</button>
        </div >
    );
}

export default SendMessage;
