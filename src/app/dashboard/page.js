import Header from "./header";
import Posts from "./posts";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Header />
      <Posts />
    </div>
  );
};

export default Dashboard;
