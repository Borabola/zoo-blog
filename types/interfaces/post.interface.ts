export type Post = {
	title?: string,
	image?: string,
	excerpt?: string,
	date: string,
	slug: string,
	content?: string,
	isFeatured?: boolean
};

export type PostItem = {
	post: Post
};

export type PostsProps = {
	posts: Array<Post>,
};
