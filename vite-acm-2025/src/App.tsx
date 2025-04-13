/* TESTING */
import { useState, useEffect } from 'react';


import { client } from "./sanity/client";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"]`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);


  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post: any) => (
          <li className="hover:underline" key={post._id}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
