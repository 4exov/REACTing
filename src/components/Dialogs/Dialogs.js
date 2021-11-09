import React from 'react';
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogsData.map(dialog =><DialogItem name={dialog.name} id = {dialog.id}/> );

    let messagesElements = state.messagesData.map(m => <Message message={m.message} /> );
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = ()=>{
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (event)=>{
       let body = event.target.value;
           props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements }


            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder='Enter your message'></textarea>
                <div> <button onClick={onSendMessageClick}> add message </button></div>
            </div>
        </div>

    )

};
export default Dialogs
