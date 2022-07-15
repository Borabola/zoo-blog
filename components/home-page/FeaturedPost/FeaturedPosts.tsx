import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { PostsProps } from "types";
import PostsGrid from "../../posts/PostsGrid/PostsGrid";
import { featuredPostStyles as styles } from "./FeaturedPosts.styles";

const FeaturedPosts: FC<PostsProps> = ({ posts }) => {
	return (
		<Box sx={styles.latest}>
			<Typography variant="h1" sx={styles.featuredTitle}>Featured Posts</Typography>
			<PostsGrid posts={posts} />
		</Box>
	);
}

export default FeaturedPosts;
