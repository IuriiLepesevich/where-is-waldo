import React, { useState } from "react";
import "../../styles/Leaderboard.css";
import LevelPicker from "../LevelPicker";

function Leaderboard(props: any) {
  const { levels, defaultLevel } = props;
  const [currentLevel, setCurrentLevel] = useState(defaultLevel);
  return (
    <div className="Leaderboard">
      <div className="levels">
        {levels.map((level: any) => (
          <div
            key={level.id}
            className="level-holder"
            onClick={() => setCurrentLevel(level.id)}
          >
            <LevelPicker
              levelNumber={level.id}
              levelName={level.name}
              imageSource={level.image}
              characters={level.characters}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
