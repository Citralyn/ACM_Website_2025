import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from "react-router";
import './index.css'

import MyNav from "./components/navbar.tsx"
import App from './App.tsx'
import Extra from "./pages/extra.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
    <Routes>
    <Route path="/" element={<MyNav />}>
      <Route index element={<App/>}></Route>
      <Route path="strange" element={<Extra/>}/>
    </Route>
    </Routes>
    </HashRouter>
   
  </StrictMode>,
)
