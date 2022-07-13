import { FC } from "react";
import { useIntl } from "react-intl";
import { PostsProps } from "types";
import classes from "./AllPosts.module.css";
import PostsGrid from "../PostsGrid/PostsGrid";


const AllPosts: FC<PostsProps> = ({ posts }) => {
	const intl = useIntl();
	return (
		<section className={classes.posts}>
			<h1>{intl.formatMessage({
				id: "allPosts",
				defaultMessage: "All Posts"
			})}</h1>
			<PostsGrid posts={posts} />
		</section>
	);
};

export default AllPosts;
