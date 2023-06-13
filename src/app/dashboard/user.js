const User = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });

  return <div>Welcome, User7994!</div>;
};

export default User;
