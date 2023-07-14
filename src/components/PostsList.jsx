import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Max" body="React is complicated" />
        <Post author="Phil" body="React's Full Course here" />
      </ul>
    </>
  );
}

export default PostsList;
