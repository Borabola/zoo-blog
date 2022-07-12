import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./PostItem.module.css";
import { Box, Typography } from "@mui/material";
import { PostItem } from "../../../types";

const PostItem: FC<PostItem> = ({ post } ) => {
	const { title, image, excerpt, date, slug } = post;
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		<li className={classes.post}>
			<Link href={linkPath}>
				<a>
					<Box className={classes.image}>
						<Image
							src={imagePath}
							alt={title}
							width={300}
							height={200}
							layout="responsive"
						/>
					</Box>
					<Box className={classes.content}>
						<Typography variant="h3">{title}</Typography>
						<time>{formattedDate}</time>
						<Typography>{excerpt}</Typography>
					</Box>
				</a>
			</Link>
		</li>
	);
};

export default PostItem;
