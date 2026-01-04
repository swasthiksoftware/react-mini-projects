import { useEffect, useState } from "react";
import './styles/postscss.css';
const Posts = () => {
  const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
  useEffect(() => {
  fetch("https://blog-backend-1-2orn.onrender.com/api/posts")
    .then(res => res.json())
    .then(data => {
      setPosts(data);
      setLoading(false);
    });
}, []);
if (loading) return <p>Loading...</p>;
if (posts.length === 0) return <p>No posts found</p>;
  return (
    <div>
      <h2>Latest Posts</h2>

      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
