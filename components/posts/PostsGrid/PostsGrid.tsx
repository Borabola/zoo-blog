import { FC } from "react";
import { PostsProps } from "types";
import PostItem from "../PostItem/PostItem";
import { Post } from "../../../types"
import classes from "./PostsGrid.module.css";

const PostsGrid: FC<PostsProps> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post: Post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
