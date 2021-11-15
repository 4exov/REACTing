import React from 'react';
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = state.messagesData.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    };

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}


            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder='Enter your message'/>
                <div>
                    <button onClick={onSendMessageClick}> add message</button>
                </div>
            </div>
        </div>

    )

};
export default Dialogs
