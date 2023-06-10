import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Game from "./components/Game/Game";
import levels from "./gameData";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home levels={levels} />} />
            <Route
              path="leaderboard"
              element={<Leaderboard levels={levels} defaultLevel={1} />}
            />
          </Route>
          <Route path="/game/:id" element={<Game levels={levels} />} />
        </Routes>
      </main>
      <footer>
        <p>
          Created by{" "}
          <a href="https://github.com/IuriiLepesevich" className="footer-link">
            Iurii Lepesevich
          </a>
        </p>
        <p>
          Art by{" "}
          <a href="https://nexusroku.tumblr.com/" className="footer-link">
            Laurie Greasley
          </a>{" "}
          |{" "}
          <a href="https://potofu.me/chekavo" className="footer-link">
            Egor Klyuchnyk
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
