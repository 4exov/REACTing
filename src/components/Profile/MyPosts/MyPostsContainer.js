import * as React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import storeContext from "../../../StoreContext";

const MyPostsContainer = (props) => {


    return (
        <storeContext.Consumer>
            { (store) => {

                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());

                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action);

                }
                return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                posts={state.profilePage.postData}
                                newPostText={state.profilePage.newPostText}/>
            }}
        </storeContext.Consumer>
    )

}
export default MyPostsContainer;
