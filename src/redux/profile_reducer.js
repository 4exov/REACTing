const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState={
    postData: [
        {id: 1, message: "Hi, how are you bro?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11},
        {id: 3, message: "Hi Hi Hi"},
        {id: 4, message: "Hi"},
        {id: 5, message: "Felix Hi"},
        {id: 6, message: "Six Hi"},
    ],
    newPostText: "it-project"
};
const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            let newPost = {
                id: 5,
                message: state.newPostText

            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:

            state.newPostText = action.newText
            return state;
        default:
            return state;

    }
}

export const updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export default profileReducer;
