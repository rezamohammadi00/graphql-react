import usePosts from "./hooks/usePosts";
const App = () => {
  const { data, isLoading, isError } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  console.log(data);

  return <div>App{data?.posts?.data?.length}</div>;
};

export default App;
