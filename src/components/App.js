import React from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromServer from "../services/data";
import Header from "./Header";
import Home from "./Home";
import "../stylesheets/App.scss";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      search: "",
      episode: 0,
      selectedOption: "Human"
    };
    this.getCharacterFilter = this.getCharacterFilter.bind(this);
    this.handleEpisodeFilter = this.handleEpisodeFilter.bind(this);
    this.handleSpeciesFilter = this.handleSpeciesFilter.bind(this);
  }
  componentDidMount() {
    getDataFromServer().then(data => {
      this.setState({
        characters: data.results
      });
    });
  }
  getCharacterFilter(event) {
    const search = event.currentTarget.value;
    this.setState({
      search: search
    });
  }
  handleEpisodeFilter(event) {
    const episode = event.currentTarget.value;
    this.setState({
      episode: episode
    });
  }
  handleSpeciesFilter(e) {
    // const { value, checked } = e.target;
    // console.log(checked, value);

    this.setState({
      selectedOption: e.target.value
    });

  }

  render() {
    const { characters, search, episode, selectedOption } = this.state;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  getCharacterFilter={this.getCharacterFilter}
                  handleSpeciesFilter={this.handleSpeciesFilter}
                  search={search}
                  characters={characters}
                  handleEpisodeFilter={this.handleEpisodeFilter}
                  episode={episode}
                  selectedOption={selectedOption}
                />
              );
            }}
          />
          <Route
            path="/character-detail/:characterId"
            render={routerProps => {
              return (
                <CharacterDetail
                  routerProps={routerProps}
                  characters={characters}
                />
              );
            }}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
