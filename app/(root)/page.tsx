import { auth } from "@/auth";
const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="h1-bold">Welcome</h1>
    </>
  );
};

export default Home;
