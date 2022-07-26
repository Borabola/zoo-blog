import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { PostsProps } from "types";
import PostsGrid from "../../posts/PostsGrid/PostsGrid";
import { featuredPostStyles as styles } from "./FeaturedPosts.styles";

export const FeaturedPosts: FC<PostsProps> = ({ posts }) => {
	const intl = useIntl();

	return (
		<Box sx={styles.latest}>
			<Typography variant="h1" sx={styles.featuredTitle}>
				{intl.formatMessage({
					id: "featuredPosts",
					defaultMessage: "Featured Posts"
				})}
				</Typography>
			<PostsGrid posts={posts} />
		</Box>
	);
}

export default FeaturedPosts;
