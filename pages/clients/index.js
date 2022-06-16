import Link from "next/link";

const ClientPage = () => {
	const clients = [
		{ id: "max", name: "Maximilian" },
		{ id: "manu", name: "Manuel" },
	];
	return (
		<div>
			<h1>The Client Page</h1>
			<ul>
				{clients.map((client) => (
					<li key={client.id}>
						{/*<Link href={`/clients/${client.id}`}>{client.name}</Link>*/}
						<Link
							href={{
								pathname: `/clients/[id]`,
								query: { id: client.id },
							}}
						>
							{client.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ClientPage;
