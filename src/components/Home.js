import React, { Fragment } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import PropTypes from "prop-types";

const Home = props => {
  const {
    getCharacterFilter,
    search,
    characters,
    handleEpisodeFilter,
    handleSpeciesFilter,
    episode,
    selectedOption
  } = props;

  return (
    <Fragment>
      <Filters
        getCharacterFilter={getCharacterFilter}
        search={search}
        handleEpisodeFilter={handleEpisodeFilter}
        handleSpeciesFilter={handleSpeciesFilter}
        episode={episode}
        characters={characters}
        selectedOption={selectedOption}
      />
      <CharacterList
        characters={characters}
        search={search}
        episode={episode}
        selectedOption={selectedOption}
      />
    </Fragment>
  );
};

Home.propTypes = {
  search: PropTypes.string.isRequired,
  getCharacterFilter: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Home;
