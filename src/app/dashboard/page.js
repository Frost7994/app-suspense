import { Suspense } from "react";
import PostList from "./postList";
import Link from "next/link";

const Dashboard = async () => {
  return (
    <div className="p-8">
      <div className="mb-8 w-full flex justify-between items-center border border-slate-500 rounded-md pl-3 p-2">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Link
            prefetch={false}
            href="/"
            className="border border-slate-500 rounded-md px-3 py-2"
          >
            Home
          </Link>
          <Link
            prefetch={false}
            href="/test"
            className="border border-slate-500 rounded-md px-3 py-2"
          >
            Test
          </Link>
          <Link
            prefetch={false}
            href="/template"
            className="border border-slate-500 rounded-md px-3 py-2"
          >
            Template
          </Link>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList />
      </Suspense>
    </div>
  );
};

export default Dashboard;
