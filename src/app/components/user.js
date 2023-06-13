import { API_URL } from "@/constants";

const User = async () => {
  const res = await fetch(`${API_URL}/api/user`, {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <div>
      <h1 className="text-xl">
        <span className="font-medium">User:</span>
        {data[0].name}
      </h1>
    </div>
  );
};

export default User;
