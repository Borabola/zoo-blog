import { useRouter } from "next/router";

const ClientProjectsPage = () => {
	const router = useRouter();

	console.log("ClientProjectsPage router.pathname", router.pathname);
	console.log("ClientProjectsPage router.query", router.query);

	return (
		<div>
			<h1>The Projects of a Given Client</h1>
		</div>
	);
};

export default ClientProjectsPage;
