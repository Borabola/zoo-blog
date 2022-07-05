import PostItem from "../PostItem/PostItem";
import classes from "./PostsGrid.module.css";

const PostsGrid = ({ posts }) => {
	console.log("PostsGrid", posts);
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
