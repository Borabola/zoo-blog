import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "types";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
}

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData: Post = {
    slug: postSlug,
    content,
		date: data.date,
		...data,
  };

  return postData;
}

export const getAllPosts = (): Array<Post> | null => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return sortedPosts;
}

export const getFeaturedPosts = () => {
  const allPosts: Array<Post> = getAllPosts();

  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
}