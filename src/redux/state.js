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
            dialogsData: [
                {id: 1, name: "One"},
                {id: 2, name: "Two"},
                {id: 3, name: "Three"},
                {id: 4, name: "Four"},
                {id: 5, name: "Five"},
                {id: 6, name: "Six"},
            ]
        }


    },
    _callSubscriber() {
        console.log("state has been changed")
    },
    getState() {
        return this._state;
    },
    addPost() {
        debugger;



},

    updateNewPostText(newText) {



    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText

            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}





export default store;
