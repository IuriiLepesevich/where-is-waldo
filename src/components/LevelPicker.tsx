import React from "react";
import "../styles/LevelPicker.css";

interface levelPickerProps {
  levelName: string;
  imageSource: string;
  characters: { id: string; name: string; image: string }[];
}

function LevelPicker(props: levelPickerProps) {
  const { levelName, imageSource, characters } = props;

  return (
    <div
      className="LevelPicker"
      style={{
        backgroundImage: `url(${imageSource})`,
      }}
    >
      <div className="level-name">{levelName}</div>
      <div className="characters">
        {characters.map((character) => (
          <div className="character" key={character.name}>
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <div className="character-name">{character.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LevelPicker;
