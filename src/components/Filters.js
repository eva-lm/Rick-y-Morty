import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filters.scss";

const Filters = props => {
  const { getCharacterFilter, search, handleEpisodeFilter, episode, handleSpeciesFilter, characters, selectedOption } = props;
const charactersSpecies = characters.map(i => i.species)
const filterSpecieNoDuplicates = [
  ...new Set(charactersSpecies.map(i => i))
]
//console.log("filterSpecieNoDuplicates" , filterSpecieNoDuplicates)

  return (
    <div className="filter__container" style={{margin: "30px", display: "flex", flexDirection: "column"}}>
      <input
        style={{marginBottom: "30px"}}
        className="filter__name"
        type="text"
        onChange={getCharacterFilter}
        value={search}
        placeholder=" busca tu personaje..."
      />

          <fieldset style={{marginBottom: "20px", border:"solid 4px gray", borderStyle: "ridge"}} >
        <legend style={{padding: "10px", color:"gray", fontSize: "18px" }}>Specie</legend>
      {filterSpecieNoDuplicates.map( (item, index) => {
        return (
          <div>
          <input key={index} id={item} type="radio" value={item} name={item}  checked={selectedOption === item} onChange={handleSpeciesFilter} />
          <label style={{margin: "10px", color:"#00d2e1"}} htmlFor={item}>{item}</label>
          </div>
          )
        })}
        </fieldset>

        <label style={{marginBottom: "10px", color:"gray", fontSize: "18px"}} htmlFor={episode}>Episodios en los que aparece:</label>
       <input style={{marginBottom: "15px", color:"#00d2e1", backgroundColor: "transparent", border: "6px", borderStyle: "dotted", textAlign: "center"}} type="number" value={episode} onChange={handleEpisodeFilter} />
    </div>
  );
};

Filters.propTypes = {
  getCharacterFilter: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
};

export default Filters;
