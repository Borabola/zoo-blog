import Head from "next/head";
import FeaturedPosts from "../components/home-page/FeaturedPost/FeaturedPosts";
import Hero from "../components/home-page/Hero/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Max" Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
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
