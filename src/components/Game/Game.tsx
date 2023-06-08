import React, { useEffect, useState } from "react";
import "../../styles/Game.css";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CharacterHeader from "./CharacterHeader";
import Timer from "./Timer";
import DropDownMenu from "./DropDownMenu";
import MessageBox from "./MessageBox";
import SubmitBox from "./SubmitBox";

interface characterInterface {
  id: string;
  name: string;
  image: string;
  isChosen: boolean;
}

interface bounds {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

const characterRelativeCoordinates: any = {
  robocop: {
    top: 52.02,
    left: 40.34,
    bottom: 62.9,
    right: 48.6,
  },
  wheatley: {
    top: 91.76,
    left: 28.51,
    bottom: 94.71,
    right: 34.06,
  },
  r2d2: {
    top: 45.15,
    left: 24.26,
    bottom: 51.8,
    right: 28.43,
  },
};

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
    }, 3000);

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
      characterRelativeCoordinates[currentCharacterId as keyof any],
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
      {isGameEnded && <SubmitBox />}
      <div className="header">
        <Link to="/" className="home-link">
          Home
        </Link>
        {isGameEnded ? (
          <div className="congratulations">Congratulations</div>
        ) : (
          <CharacterHeader currentCharacters={currentCharacters} />
        )}
        <Timer time={time} />
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
