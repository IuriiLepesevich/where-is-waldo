import React, { useEffect, useState } from "react";
import "../../styles/Game.css";
import { useParams } from "react-router-dom";
import Timer from "./Timer";
import DropDownMenu from "./DropDownMenu";

interface character {
  id: string;
  name: string;
  image: string;
}

function Game(props: any) {
  const params = useParams();
  const levelNumber: number = Number(params.id);
  const { levels } = props;
  const currentLevel = levels[levelNumber - 1];

  const [time, setTime] = useState(0);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [dropDownCoordinates, setDropDownCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((curr) => curr + 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const handleClick = (e: any) => {
    const parent = e.currentTarget.parentElement || {
      offsetLeft: 0,
      offsetTop: 0,
    };
    const xPos =
      e.clientX + document.documentElement.scrollLeft - parent.offsetLeft;

    const yPos =
      e.clientY + document.documentElement.scrollTop - parent.offsetTop;

    setIsDropDownVisible(!isDropDownVisible);
    setDropDownCoordinates({
      x: xPos,
      y: yPos,
    });
    console.log(xPos, yPos);
  };

  const handleChoice = (e: any) => {
    console.log(e.target.id);
    setIsDropDownVisible(false);
  };

  return (
    <div className="Game">
      <div className="header">
        <div className="characters">
          {currentLevel.characters.map((character: character) => (
            <div className="character" key={character.id}>
              <img
                src={character.image}
                alt={character.name}
                className="character-image"
              />
              <div className="character-name">{character.name}</div>
            </div>
          ))}
        </div>
        <Timer time={time} />
      </div>
      <div className="image-frame">
        <img
          src={currentLevel.image}
          alt={currentLevel.name}
          className="game-image"
          onClick={handleClick}
        />
        {isDropDownVisible && (
          <DropDownMenu
            characters={currentLevel.characters}
            coordinates={dropDownCoordinates}
            handleChoice={handleChoice}
          />
        )}
      </div>
    </div>
  );
}

export default Game;
