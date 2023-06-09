const PostList = async () => {
  const fetchDataWithDelay = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
  };

  const data = await fetchDataWithDelay();

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
