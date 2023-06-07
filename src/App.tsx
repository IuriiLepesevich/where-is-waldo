import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="leaderboard" element={<Leaderboard />} />
          </Route>
          <Route path="/:id" element={<Game />} />
        </Routes>
      </main>
      <footer>Created by Iurii Lepesevich</footer>
    </div>
  );
}

export default App;
