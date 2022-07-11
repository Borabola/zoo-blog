import Head from "next/head";
import FeaturedPosts from "../components/home-page/FeaturedPost/FeaturedPosts";
import Hero from "../components/home-page/Hero/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
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

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
		revalidate: 1800
  };
}

export default HomePage;
