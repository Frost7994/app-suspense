import User from "./user";
import { Suspense } from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <h1 className="text-3xl font-medium">Dashboard</h1>
      <Suspense fallback={<div>User Loading...</div>}>
        <User />
      </Suspense>
      <Link href="/" prefetch={false}>
        Home
      </Link>
    </div>
  );
};

export default Dashboard;
