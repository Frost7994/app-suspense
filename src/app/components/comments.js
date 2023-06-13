import { API_URL } from "@/constants";

const Comments = async () => {
  const res = await fetch(`${API_URL}/api/comments`, {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <ul className="flex flex-col gap-2">
      {data.map((comment) => (
        <li
          key={comment.id}
          className="border rounded-md px-3 py-2 flex flex-col"
        >
          <h2 className="text-lg font-bold">{comment.name}</h2>
          <p className="text-sm">{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
