import fetchPost from "../api/fetchPost";

const resoure = fetchPost(
  "https://jsonplaceholder.typicode.com/posts?_limit=5"
);

const PostSelector = ({ onSelectPost }) => {
  const posts = resoure.read();
  return (
    <div>
      <select onChange={onSelectPost}>
        <option value="">select post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PostSelector;
