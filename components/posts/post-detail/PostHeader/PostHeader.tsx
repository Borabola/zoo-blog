import { FC } from "react";
import Image from "next/image";
import classes from "./PostHeader.module.css";
import { PostHeaderProps } from "./PostHeader.types"

const PostHeader: FC<PostHeaderProps> = ({ title, image }) => {
	return (
		<header className={classes.header}>
			<h1>{title}</h1>
			<Image
				src={image}
				alt={title}
				width={200}
				height={150}
			/>
		</header>
	);
};

export default PostHeader;
