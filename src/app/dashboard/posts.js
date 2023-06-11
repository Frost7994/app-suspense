const Posts = async () => {
  const fetchPostsWithDelay = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=2",
      {
        cache: "no-store",
      }
    );
    const data = await res.json();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1500);
    });
  };

  const posts = await fetchPostsWithDelay();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl font-medium">Posts List</p>
      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border rounded-md p-4 border-slate-500 flex flex-col"
          >
            <p className="text-lg font-medium truncate">{post.title}</p>
            <p className="text-sm text-slate-500">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
