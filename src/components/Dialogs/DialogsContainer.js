import React from 'react';
import storeContext from "../../StoreContext";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = () => {


    return <storeContext.Consumer>
        { (store) => {
            let state = store.getState().dialogsPage;


            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            };

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            };
            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                            dialogsPage={state}/>
        }
    }
    </storeContext.Consumer>

}
export default DialogsContainer;
