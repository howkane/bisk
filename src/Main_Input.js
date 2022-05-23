import {React, useState } from 'react';
import "./Main_Input.css";
import { IonAvatar, IonButton } from '@ionic/react';
import db from "./firebase";

function Main_Input() {

    const  [message, setMessage] = useState("");

    const sendMSG = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          text: message 
        });
    
        setMessage("");
      };


    return (
        <div className="theBox">
            <form> 
                <div className="main_input">
                    <input 
                    onChange={(e) => setMessage(e.target.value)} 
                    value={message}
                    placeholder="Start writing.." 
                    type="array"/>
                    <IonButton onClick={sendMSG}>Post</IonButton>
                </div>
            </form>
        </div>
    );
}
export default Main_Input;