import { fetchData } from "../data";
import use from "../hook/use";

const Comments = ({ postId }) => {
  const comments = use(
    fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  );
  console.log(comments);
  return (
    <div>
      <h2 className="text-bold text-3xl">Comments</h2>
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
