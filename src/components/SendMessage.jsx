import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

const SendMessage = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = async () => {
        if (message.trim() === '') {
            alert('Cannot send blank message.');
            return;
        }
        try {
            await addDoc(collection(db, "messages"), {
                text: message
            });
            setMessage('Message Sent. Thanks for your kind words. Means a lot...');

            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error.message);
        }
    };

    return (
        <div className="infoText">
            <h1>Uro Chithi Bakso (উড়ো চিঠি বাক্স)📮 </h1>
            <h2>Anonymous Letter Box</h2>
            <p>Howdy, it's <span>@uthsob_cb</span>. This year, I did a bunch of stuff, met new people, made friends, and did some weird things. 😜  <br /> Met people in real life and more. Overall I've changed a lot . If we meet this year or talked with you or you found me then i'm looking for you 🕵🏽‍♂️. <br /> I'm curious about what you think. Could you share a message or some tips? or maybe  <span>constructive criticism</span> for me? <br /> All your data will be Anonymous. I won't know who the heck you are🥷. But your message will make my day. Thanks a Ton🚀</p>
            <textarea name="chithibox" cols="50" rows="10" placeholder='Start Writing Chithi...' value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
}

export default SendMessage;
