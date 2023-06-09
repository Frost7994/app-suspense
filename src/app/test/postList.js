import { API_URL } from "@/constants";

const PostList = async () => {
  const res = await fetch(`${API_URL}/api/test`, {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
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
  );
};

export default PostList;
