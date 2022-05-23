import { React, useState } from 'react';
import "./NewInput.css";
import { IonButton } from '@ionic/react';
import db from "./firebase";
import firebase from "firebase";

function NewInput() {

    const  [newMessage, setNewMessage] = useState("");

    const sendNew = (e) => {
        e.preventDefault();
    
        var textUpdate = db.collection("posts").doc("0WFPXMyA8hFR3EuMDjkT");
        textUpdate.update({
          text: firebase.firestore.FieldValue.arrayUnion(" " + newMessage)
        });
    
        setNewMessage("");
      };


    return (
        <div className="newBox">
            <form> 
                <div className="newBox_input">
                    <input 
                    onChange={(e) => setNewMessage(e.target.value)} 
                    value={newMessage}
                    placeholder="Newput.." 
                    type="array"/>
                    <IonButton className="newBox_newButton"onClick={sendNew}></IonButton>
                </div>
            </form>
        </div>
    );
}
export default NewInput;