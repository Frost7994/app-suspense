import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Dashboard;
