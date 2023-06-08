import React from "react";
import "../../styles/CharacterHeader.css";

function CharacterHeader(props: any) {
  const { currentCharacters } = props;
  return (
    <div className="CharacterHeader">
      {currentCharacters.map((character: any) => (
        <div className="character" key={character.id}>
          {!character.isChosen && (
            <>
              <img
                src={character.image}
                alt={character.name}
                className="character-image"
              />
              <div className="character-name">{character.name}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default CharacterHeader;
