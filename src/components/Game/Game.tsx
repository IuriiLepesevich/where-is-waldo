import React, { useEffect, useState } from "react";
import "../../styles/Game.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CharacterHeader from "./CharacterHeader";
import Timer from "./Timer";
import DropDownMenu from "./DropDownMenu";
import MessageBox from "./MessageBox";
import SubmitBox from "./SubmitBox";
import { getCharCoordinates, bounds } from "../../firebase";

interface characterInterface {
  id: string;
  name: string;
  image: string;
  isChosen: boolean;
}

function Game(props: any) {
  const params = useParams();
  const levelNumber: number = Number(params.id);
  const { levels } = props;
  const currentLevel = levels[levelNumber - 1];

  const [currentCharacters, setCurrentCharacters] = useState(
    currentLevel.characters.map((character: characterInterface) => ({
      ...character,
      isChosen: false,
    }))
  );
  const [time, setTime] = useState(0);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [dropDownCoordinates, setDropDownCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [relativeCoordinates, setRelativeCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [messageBoxData, setMessageBoxData] = useState({
    isVisible: false,
    isCorrect: false,
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((curr) => curr + 1);
    }, 1000);

    if (isGameEnded) clearInterval(timerInterval);

    return () => {
      clearInterval(timerInterval);
    };
  }, [isGameEnded]);

  useEffect(() => {
    setIsGameEnded(
      currentCharacters.every(
        (character: characterInterface) => character.isChosen === true
      )
    );
  }, [currentCharacters]);

  useEffect(() => {
    const messageBoxDataInterval = setInterval(() => {
      setMessageBoxData({
        isVisible: false,
        isCorrect: false,
      });
    }, 2000);

    return () => {
      clearInterval(messageBoxDataInterval);
    };
  }, [messageBoxData]);

  const handleClick = (e: any) => {
    const bounds = e.target.getBoundingClientRect();
    const posX = e.clientX - bounds.left;
    const posY = e.clientY - bounds.top;

    const relPosX = (posX / e.target.scrollWidth) * 100;
    const relPosY = (posY / e.currentTarget.scrollHeight) * 100;

    setIsDropDownVisible(!isDropDownVisible);
    setDropDownCoordinates({
      x: posX,
      y: posY,
    });
    setRelativeCoordinates({
      x: relPosX,
      y: relPosY,
    });
  };

  const checkIntersection = (
    bounds: bounds,
    xCoord: number,
    yCoord: number
  ) => {
    return (
      xCoord > bounds.left &&
      xCoord < bounds.right &&
      yCoord > bounds.top &&
      yCoord < bounds.bottom
    );
  };

  const handleChoice = async (e: any) => {
    const currentCharacterId: string = e.target.id;

    const isChosenCorrectly = checkIntersection(
      await getCharCoordinates(currentCharacterId),
      relativeCoordinates.x,
      relativeCoordinates.y
    );

    if (isChosenCorrectly) {
      setCurrentCharacters(
        currentCharacters.map((character: characterInterface) => {
          if (character.id === currentCharacterId)
            return {
              id: character.id,
              name: character.name,
              image: character.image,
              isChosen: true,
            };
          else return character;
        })
      );
    }

    setMessageBoxData({
      isVisible: true,
      isCorrect: isChosenCorrectly,
    });

    setIsDropDownVisible(false);
  };

  return (
    <div className="Game">
      {isGameEnded && <SubmitBox levelNumber={currentLevel.id} time={time} />}
      <div className="header">
        <Link to="/" className="home-link">
          Home
        </Link>
        {isGameEnded ? (
          <div className="congratulations">Congratulations</div>
        ) : (
          <CharacterHeader currentCharacters={currentCharacters} />
        )}
        <Timer time={time / 1} />
      </div>
      <div className="game-frame">
        {messageBoxData.isVisible && (
          <MessageBox isCorrect={messageBoxData.isCorrect} />
        )}
        <div className="image-frame">
          <img
            src={currentLevel.image}
            alt={currentLevel.name}
            className="game-image"
            onClick={handleClick}
            draggable={false}
          />
          {isDropDownVisible && (
            <DropDownMenu
              characters={currentCharacters}
              coordinates={dropDownCoordinates}
              handleChoice={handleChoice}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;
