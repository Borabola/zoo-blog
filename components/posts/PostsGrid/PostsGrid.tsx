import { FC } from "react";
import { Box } from "@mui/material";
import { PostsProps, Post } from "types";
import PostItem from "../PostItem/PostItem";
import { postGridStyles as styles } from "./PostGrid.styles";

export const PostsGrid: FC<PostsProps> = ({ posts }) => {
  return (
    <Box sx={styles.grid}>
      {posts.map((post: Post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </Box>
  );
}

export default PostsGrid;
