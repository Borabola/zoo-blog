import { FC } from "react";
import { PostsProps } from "types";
import PostsGrid from "../../posts/PostsGrid/PostsGrid";
import classes from "./FeaturedPosts.module.css";


const FeaturedPosts: FC<PostsProps> = ({ posts }) => {
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={posts} />
		</section>
	);
}

export default FeaturedPosts;
