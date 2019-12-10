import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { pets } from './data/pets.json';
// const pets = importData.pets;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
    console.log(pets);
  }

  selectPet = (petId) => {
    let selectedPet = pets.find((pet) => pet.id === petId);

    this.state.currentPet = selectedPet

    this.setState({
      pets,
    })    
  }

  removePet = (petId) => {
    let selectedPet = pets.find((pet) => pet.id === petId);

    let petIndex = pets.indexOf(selectedPet)

    pets.splice(petIndex, 1)

    if (this.state.currentPet) {
      this.state.currentPet = undefined
    }
    
    this.setState({
      pets,
    })
  }

  render () {
    const { currentPet } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar />
        </section>
        { /* Wave 1:  Where Pet Details should appear */}
        { this.state.currentPet
          ? <PetDetails currentPet={this.state.currentPet} />
          : <h2></h2>
        }
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */}
          <PetList pets={this.state.petList} selectPet={this.selectPet} removePet={this.removePet}/>
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */}
        </section>
      </main>
    );
  }
}

export default App;
