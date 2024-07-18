import { useGetPostsQuery } from '../redux/apiSlice'

const PostsList: React.FC = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching posts</div>

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Posts List:</h1>
      <ol>
        {posts?.map((post) => (
          <li
            key={post.id}
            className="bg-white border border-gray-200 p-4 mb-4 shadow-md rounded"
          >
            <p className="font-semibold">User ID: <span className="font-normal">{post.userId}</span></p>
            <p className="font-semibold">Title: <span className="font-normal">{post.title}</span></p>
            <p className="font-semibold">Body: <span className="font-normal">{post.body}</span></p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PostsList
