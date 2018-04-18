// Import components and styles
import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Heading";
import Main from "./components/Main";
import Counters from "./components/Counters"
import Characters from "./components/Characters";
import characters from "./characters.json";
import './App.css';

// Initiate react component
// Component needed for rendering and states
class App extends Component {

  // Store data in state
  // characters = array from .json, counter = current score count
  // highScore = recorded high score
  state = {
    characters,
    lastId: 0,
    counter: 0,
    highScore: 0,
  };

  // Handle count and game progression
  // Check first if clicked image's ID matches last clicked ID from state
  // True: Add 1 to counter, store new ID to state, mod highScore if
  // counter is higher, shuffle state character array and render
  // False: Set counter to 0 and render
  handleIncrement = (id) => {
    if (this.state.lastId !== id) {
      this.setState({ 
        counter: this.state.counter + 1,
        lastId: id,
        highScore: 
          this.state.counter >= this.state.highScore 
          ? 
          this.state.counter + 1 : this.state.highScore,
        characters: this.state.characters.sort(() => Math.random() - 0.5)
      })
    }
    else {
      this.setState({ counter: 0 })
    }
  };

  // Render components
  render() {
    // Return statement required
    return (
      // Overall wrapper for page
      <Wrapper>
        <Header>The Office Memory Game!</Header>
        <Counters 
            current={this.state.counter}
            highScore={this.state.highScore}
            />
        <Main>
          {this.state.characters.map(character => (
            <Characters
            key={character.id}
            alt={character.name}
            id={character.id} 
            image={character.image}
            handleIncrement={this.handleIncrement} 
            />
          ))}
        </Main>
      </Wrapper>
    );
  }
}

export default App;