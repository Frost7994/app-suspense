import Link from "next/link";

const Home = async () => {
  const fetchDataWithDelay = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=4",
      {
        cache: "no-store",
      }
    );
    const data = await res.json();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
  };

  const data = await fetchDataWithDelay();

  return (
    <div className="p-8">
      <div className="mb-8 w-full flex justify-between items-center border border-slate-500 rounded-md pl-3 p-2">
        <h1 className="text-2xl font-bold">Template</h1>
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
            href="/dashboard"
            className="border border-slate-500 rounded-md px-3 py-2"
          >
            Dashboard
          </Link>
        </div>
      </div>{" "}
      <ul className="flex flex-col gap-2">
        {data.map((post) => (
          <li
            key={post.id}
            className="flex flex-col border rounded-md border-slate-500 p-4"
          >
            <h4 className="text-lg font-medium">{post.title}</h4>
            <p className="text-slate-500">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
