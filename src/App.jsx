import { Suspense, useState } from "react";
import PostSelector from "./components/PostSelector";
import Comments from "./components/Comments";

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  console.log(selectedPostId);

  function handleSelectPost(e) {
    const value = e.target.value;
    setSelectedPostId(value);
  }
  return (
    <div>
      <h1>React Suspense and Error Boundaries</h1>

      <Suspense fallback={<h1>Loading....</h1>}>
        <PostSelector onSelectPost={handleSelectPost} />
      </Suspense>

      <Suspense fallback={<h1>Loading coments....</h1>}>
        {selectedPostId && <Comments postId={selectedPostId} />}
      </Suspense>
    </div>
  );
}
