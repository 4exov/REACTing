const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

let initSate = {
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hi Hi"},
        {id: 3, message: "Hi Hi Hi"},
        {id: 4, message: "Hi"},
        {id: 5, message: "Felix Hi"},
        {id: 6, message: "Six Hi"},
    ],
    newMessageBody: "",
    dialogsData: [
        {id: 1, name: "One"},
        {id: 2, name: "Two"},
        {id: 3, name: "Three"},
        {id: 4, name: "Four"},
        {id: 5, name: "Five"},
        {id: 6, name: "Six"},
    ]
};

export const dialogsReducer = (state=initSate, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:

            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:

            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 7, message: body});
            return state;
        default:
            return state;
    }

}



export const sendMessageCreator = () => {

    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {


        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialogsReducer;
