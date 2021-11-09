
import sidebarReducer from "./sidebar_reducer";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";


let store = {
    _state: {

        profilePage: {
            postData: [
                {id: 1, message: "Hi, how are you bro?", likesCount: 12},
                {id: 2, message: "It is my first post", likesCount: 11},
                {id: 3, message: "Hi Hi Hi"},
                {id: 4, message: "Hi"},
                {id: 5, message: "Felix Hi"},
                {id: 6, message: "Six Hi"},
            ],
            newPostText: "it-project"


        },
        dialogsPage: {
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
        },
        sidebar:{}


    },
    _callSubscriber() {
        console.log("state has been changed")
    },
    getState() {
        return this._state;
    },
    addPost() {




},

    updateNewPostText(newText) {



    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }}




export default store;
