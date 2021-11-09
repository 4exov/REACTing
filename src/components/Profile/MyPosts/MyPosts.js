import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
import * as React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";



const MyPosts = (props) => {

    let postsElement = props.posts.postData.map(p => <Post message={p.message}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }
    return (

        <div className={classes.postBlock}>
            <h3> my post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}> add post</button>
                </div>
            </div>


            <div className={classes.posts}>
                { postsElement}

            </div>
        </div>

    )
};
export default MyPosts;
