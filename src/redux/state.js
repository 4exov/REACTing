import {rerenderEntireTree} from "../render";


let state = {
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
        messagesData : [
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

}
export let addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText

    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText= newText;
    rerenderEntireTree(state);
}
export default state;
