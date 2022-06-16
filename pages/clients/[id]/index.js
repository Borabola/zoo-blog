import { useRouter } from "next/router";

const ClientProjectsPage = () => {
	const router = useRouter();

	console.log("ClientProjectsPage router.pathname", router.pathname);
	console.log("ClientProjectsPage router.query", router.query);

	const loadProjectHandler = () => {
		//load data
		//router.push("/clients/max/projecta");
		//or

		router.push({
			pathname: "/clients/[id]/[clientprojectid]",
			query: {
				id: "max",
				clientprojectid: "clientprojecta",
			},
		});

		// or replace routing path
		// router.replace("/clients/max/projecta");
	}

	return (
		<div>
			<h1>The Projects of a Given Client</h1>
			<button onClick={ loadProjectHandler }>Load Project A</button>
		</div>
	);
};

export default ClientProjectsPage;
