import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
debugger;
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts ={props.state}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
                    />
        </div>
    )
};
export default Profile;
