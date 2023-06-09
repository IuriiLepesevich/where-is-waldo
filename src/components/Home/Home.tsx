import React from "react";
import "../../styles/Home.css";
import LevelPicker from "../LevelPicker";
import { Link } from "react-router-dom";

function Home(props: any) {
  const { levels } = props;
  return (
    <div className="Home">
      {levels.map((level: any) => (
        <Link to={`game/${level.id}`} className="link">
          <LevelPicker
            key={level.id}
            levelNumber={level.id}
            levelName={level.name}
            imageSource={level.image}
            characters={level.characters}
          />
        </Link>
      ))}
    </div>
  );
}

export default Home;
