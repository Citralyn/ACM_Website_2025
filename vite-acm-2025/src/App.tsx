

import HomePage from "./pages/HomePage";
import MyNav from "./components/navbar.tsx"
import Board from "./pages/Board.tsx"
import Practice from "./pages/Practice.tsx"
import Compete from "./pages/Compete.tsx"
import NewMembers from "./pages/NewMembers.tsx"
import { Routes, Route } from "react-router";

export default function App() {


  return (
    <Routes>
    <Route path="/" element={<MyNav />}>
      <Route index element={<HomePage/>}></Route>
      <Route path="board" element={<Board/>}/>
      <Route path="learn" element={<NewMembers/>}/>
      <Route path="compete" element={<Compete/>}/>
      <Route path="practice" element={<Practice/>}/>
    </Route>
    </Routes>

  );
}
