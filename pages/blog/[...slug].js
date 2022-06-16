import { useRouter } from "next/router";

const BlogPostsPage = () => {
	const router = useRouter();

	//http://localhost:3000/blog/2022/06
	console.log("BlogPostsPage router.query", router.query);
	return (
		<div>
			<h1>The Blog Posts Page</h1>
		</div>
	);
};

export default BlogPostsPage;
