import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { PostsProps } from "types";
import FeaturedPosts from "../components/home-page/FeaturedPost/FeaturedPosts";
import Hero from "../components/home-page/Hero/Hero";
import { getFeaturedPosts, getAllPosts } from "../lib/posts-util";

export const HomePage: FC<PostsProps> = (props) => {
  return (
		<>
			<Head>
				<title>Mykolaiv Zoo Blog</title>
				<meta name="description" content="News and articles of Mykolaiv Zoo" />
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
}

export const getStaticProps: GetStaticProps<PostsProps> = () => {
	const filteredPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts(filteredPosts);

  return {
    props: {
      posts: featuredPosts,
    },
		revalidate: 1800
  };
}

export default HomePage;
