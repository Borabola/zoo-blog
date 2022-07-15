import { FC } from "react";
import { useIntl } from "react-intl";
import { Box, Typography } from "@mui/material";
import { PostsProps } from "types";
import classes from "./AllPosts.module.css";
import PostsGrid from "../PostsGrid/PostsGrid";
import { allPostsStyles as styles } from "./AllPosts.styles";

const AllPosts: FC<PostsProps> = ({ posts }) => {
	const intl = useIntl();
	return (
		<Box sx={styles.posts}>
			<Typography
				variant="h1"
				sx={styles.title}
			>
				{intl.formatMessage({
					id: "allPosts",
					defaultMessage: "All Posts"
				})}
			</Typography>
			<PostsGrid posts={posts} />
		</Box>
	);
};

export default AllPosts;
