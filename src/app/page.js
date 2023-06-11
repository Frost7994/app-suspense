// state
import { Suspense } from "react";

// components
import Header from "./header";
import Posts from "./posts";

const Home = () => {
  return (
    <div className="p-8 flex flex-col gap-4">
      <Header />
      <Suspense fallback={<div>Posts Loading...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default Home;
