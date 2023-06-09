import { Suspense } from "react";
import PostList from "./postList";
import Link from "next/link";

const Test = async () => {
  return (
    <div className="p-8">
      <div className="mb-8 w-full flex justify-between items-center border border-slate-500 rounded-md pl-3 p-2">
        <h1 className="text-2xl font-bold">Test</h1>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="border border-slate-500 rounded-md px-3 py-2"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="border border-slate-500 rounded-md px-3 py-2"
          >
            Dashboard
          </Link>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList />
      </Suspense>
    </div>
  );
};

export default Test;