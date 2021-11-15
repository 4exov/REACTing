import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
import * as React from "react";


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (

        <div className={classes.postBlock}>
            <h3> my post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}> add post</button>
                </div>
            </div>


            <div className={classes.posts}>
                {postsElement}

            </div>
        </div>

    )
};
export default MyPosts;
