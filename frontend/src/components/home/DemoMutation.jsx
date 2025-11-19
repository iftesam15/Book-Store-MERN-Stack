import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

const createPost = async (newPost) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  return res.data;
};

const DemoMutation = () => {
  const queryClient = useQueryClient();

  // ✅ Fetch posts using new v5 object syntax
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // ✅ Mutation to create post (v5 syntax)
  const {
    mutateAsync,
    isPending,
    isSuccess,
    data: newPostData,
    reset,
  } = useMutation({
    mutationFn: createPost,
    onMutate: async (newPost) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      // Snapshot previous value
      const previousPosts = queryClient.getQueryData({ queryKey: ["posts"] });

      // Optimistic update
      queryClient.setQueryData({ queryKey: ["posts"] }, (old = []) => [
        ...old,
        { ...newPost, id: Date.now() }, // temporary ID
      ]);

      return { previousPosts };
    },
    onError: (err, newPost, context) => {
      // Rollback on error
      queryClient.setQueryData({ queryKey: ["posts"] }, context.previousPosts);
      console.error("Error adding post:", err);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      console.log("Post added successfully:", data);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleAddPost = async () => {
    await mutateAsync({
      title: "New Post",
      body: "This is the content of the new post.",
    });
  };

  return (
    <div>
      <h2>Posts</h2>
      {isLoading && <p>Loading posts...</p>}
      {isError && <p>Error: {error.message}</p>}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            {post.id} - {post.title}
          </li>
        ))}
      </ul>

      <button onClick={handleAddPost} disabled={isPending}>
        {isPending ? "Adding..." : "Add Post"}
      </button>
      <button onClick={reset}>Reset</button>

      {isSuccess && <div>Last added post: {JSON.stringify(newPostData)}</div>}
    </div>
  );
};

export default DemoMutation;
