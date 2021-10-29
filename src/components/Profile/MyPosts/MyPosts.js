import classes from "./MyPosts.module.css"
import Post from "./Post/Post"
import * as React from "react";

const MyPosts = (props) => {

    let postsElement = props.posts.postData.map(p => <Post message={p.message}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (

        <div className={classes.postBlock}>
            <h3> my post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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
