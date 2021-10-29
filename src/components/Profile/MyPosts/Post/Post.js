import classes from "./Post.module.css"

import React from "react";

const Post = (props) => {

    return (

        <div className={classes.item}>
            <img src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt="none"/>
            <span>like</span>
            <div >{props.message}</div>

        </div>

    )
}
export default Post;
