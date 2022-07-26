export type Post = {
	title: string,
	date: string,
	slug: string,
	image?: string,
	excerpt?: string,
	content?: string,
	isFeatured?: boolean
};

export type PostItemProps = {
	post: Post
};

export type PostsProps = {
	posts: Array<Post>,
};
