import { API_URL } from "@/constants";

const Posts = async () => {
  const res = await fetch(`${API_URL}/api/posts`, {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <ul className="flex flex-col gap-2">
      {data.map((post) => (
        <li key={post.id} className="border rounded-md px-3 py-2 flex flex-col">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-sm">{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
