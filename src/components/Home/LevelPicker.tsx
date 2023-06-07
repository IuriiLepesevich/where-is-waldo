import React from "react";
import "../../styles/LevelPicker.css";

interface levelPickerProps {
  levelNumber: number;
  levelName: string;
  imageSource: string;
  characters: { id: string; name: string; image: string }[];
}

function LevelPicker(props: levelPickerProps) {
  const { levelNumber, levelName, imageSource, characters } = props;
  console.log(imageSource);

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
