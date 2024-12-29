import { useQuery } from "@tanstack/react-query";

import { fetchPosts } from "../services/graphqlzero/posts";

const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};

export default usePosts;
