import { FC, ElementType } from "react";
import Image from "next/image";
import { Box, Paper } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import PostHeader from "../PostHeader/PostHeader";
import { PostItem } from "types";
import { postContentStyles as styles } from "./PostContent.styles";

SyntaxHighlighter.registerLanguage("js", js)
SyntaxHighlighter.registerLanguage("css", css);

const PostContent: FC<PostItem> = ({ post }) => {
	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const customRenderers: {[nodeType: string]: ElementType} = {
		p(paragraph) {
			const { node } = paragraph;

			if (node.children[0].tagName === "img") {
				const image = node.children[0];

				return (
					<Box sx={styles.image}>
						<Image
							src={`/images/posts/${post.slug}/${image.properties.src}`}
							alt={image.alt}
							width={600}
							height={300}
						/>
					</Box>
				);
			}

			return <p>{paragraph.children}</p>;
		},

		code(code) {
			const { className, children } = code;
			const language = className.split("-")[1];
			return (
				<SyntaxHighlighter
					style={atomDark}
					language={language}
					// eslint-disable-next-line react/no-children-prop
					children={children}
				/>
			);
		},
	};

	return (
		<Paper sx={styles.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</Paper>
	);
};

export default PostContent;
