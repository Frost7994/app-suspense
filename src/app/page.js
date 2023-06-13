import { Suspense } from "react";
import Posts from "./components/posts";
import Comments from "./components/comments";
import User from "./components/user";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <Link href="/dashboard">Dashboard</Link>
      </div>
      <Suspense fallback={<div>User Loading...</div>}>
        <User />
      </Suspense>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Posts</h2>
          <Suspense fallback={<div>Posts Loading...</div>}>
            <Posts />
          </Suspense>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Comments</h2>

          <Suspense fallback={<div>Comments Loading...</div>}>
            <Comments />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
