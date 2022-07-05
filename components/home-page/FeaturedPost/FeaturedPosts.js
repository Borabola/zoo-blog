import PostsGrid from "../../posts/PostsGrid/PostsGrid";
import classes from "./FeaturedPosts.module.css";

function FeaturedPosts({ posts }) {
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={posts} />
		</section>
	);
}

export default FeaturedPosts;
