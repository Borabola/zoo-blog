import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ContextParams, PostItem } from "types";
import PostContent from "../../components/posts/post-detail/PostContent/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage: FC<PostItem> = (props) => {
	return (
		<>
			<Head>
				<title>{props.post.title}</title>
				<meta name="description" content={props.post.excerpt} />
			</Head>
			<PostContent post={props.post} />
		</>
	);
}

export const getStaticProps: GetStaticProps<PostItem, ContextParams> = (context) => {
	const { params } = context;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export const getStaticPaths: GetStaticPaths = () => {
	const postFilenames = getPostsFiles();

	const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}

export default PostDetailPage;
