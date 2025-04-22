

import HomePage from "./pages/HomePage";
import MyNav from "./components/navbar.tsx"
import Board from "./pages/Board.tsx"
import { Routes, Route } from "react-router";

export default function App() {


  return (
    <Routes>
    <Route path="/" element={<MyNav />}>
      <Route index element={<HomePage/>}></Route>
      <Route path="board" element={<Board/>}/>
    </Route>
    </Routes>

  );
}


/*

    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <Button>aslfjd</Button>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post: any) => (
          <li className="hover:underline" key={post._id}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </main>

  */