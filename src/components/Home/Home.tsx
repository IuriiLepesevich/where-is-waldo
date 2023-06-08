import React from "react";
import "../../styles/Home.css";
import LevelPicker from "./LevelPicker";

function Home(props: any) {
  const { levels } = props;
  return (
    <div className="Home">
      {levels.map((level: any) => (
          <LevelPicker
            key={level.id}
            levelNumber={level.id}
            levelName={level.name}
            imageSource={level.image}
            characters={level.characters}
          />
      ))}
    </div>
  );
}

export default Home;
