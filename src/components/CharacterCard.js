import React from "react";
import "../stylesheets/CharacterCard.scss";

const CharacterCard = props => {
  const { character } = props;

  const statusIcons = () => {
    if (character.status === "Alive") {
      return <i className="far fa-smile"></i>;
    } else if (character.status === "Dead") {
      return <i className="fas fa-skull-crossbones"></i>;
    } else {
      return <i className="far fa-question-circle"></i>;
    }
  };

  return (
    <div>
      <div className="character__image-container">
        <img src={character.image} alt={character.name} />
      </div>
      <p className="status__icon">{statusIcons()}</p>
      <h2 className="character__name">{character.name}</h2>
      <p className="character__specie">{character.species}</p>
    </div>
  );
};

export default CharacterCard;
