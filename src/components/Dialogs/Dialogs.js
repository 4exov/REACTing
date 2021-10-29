import React from 'react';
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {



    let dialogElements = props.state.dialogsData.map(dialog =><DialogItem name={dialog.name} id = {dialog.id}/> );

    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} /> );
    let newMessageElement = React.createRef();

    let addNewMessage = ()=>{
        let newMessage = newMessageElement.current.value;
        alert(newMessage)
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements }


            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <div> <button onClick={addNewMessage}> add message </button></div>
            </div>
        </div>

    )

};
export default Dialogs
