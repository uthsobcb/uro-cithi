import React from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { googleProvider } from "../firebase";

export const Auth = () => {
    const [user, setUser] = useState("");

    console.log(auth?.currentUser?.email);

    const signInWithGoogle = async () => {
        try {
            const auth = getAuth();

            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            {user ? (
                <p>Welcome, {user.displayName}!</p>
            ) : (

                <button onClick={signInWithGoogle}>Access to Admin Area</button>
            )}

        </>
    )
};
export default Auth;
