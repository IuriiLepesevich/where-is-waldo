import React from "react";
import "../../styles/DropDownMenu.css";

function DropDownMenu(props: any) {
  const { characters, coordinates, handleChoice } = props;
  return (
    <div
      className="DropDownMenu"
      style={{
        left: `${coordinates.x}px`,
        top: `${coordinates.y}px`,
      }}
    >
      {characters.map(
        (character: any) =>
          !character.isChosen && (
            <div
              className="menu-character"
              key={character.id}
              id={character.id}
              onClick={handleChoice}
            >
              {character.name}
            </div>
          )
      )}
    </div>
  );
}

export default DropDownMenu;
