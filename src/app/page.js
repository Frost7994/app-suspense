import Link from "next/link";

const Home = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-3xl font-medium">Home</h1>
      <Link href="/dashboard" prefetch={false}>
        Dashboard
      </Link>
    </div>
  );
};

export default Home;
