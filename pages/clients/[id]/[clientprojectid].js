import { useRouter } from "next/router";

const SelectedClientProjectsPage = () => {
    const router = useRouter();

    console.log("router.pathname", router.pathname);
    console.log("router.query", router.query);

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
};

export default SelectedClientProjectsPage;
