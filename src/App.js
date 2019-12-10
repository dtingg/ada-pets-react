import React, { Component } from 'react';
import PetList from './components/PetList';
// import PetCard from './components/PetCard'
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

    this.setState({
      currentPet: selectedPet,
    }); 
  }

  removePet = (petId) => {
    let currentPet = this.state.currentPet
    let selectedPet = pets.find((pet) => pet.id === petId);

    if (currentPet === selectedPet) {
      this.setState({
        currentPet: undefined
      })
    }

    let petIndex = pets.indexOf(selectedPet)

    pets.splice(petIndex, 1)

    this.setState({ pets });
  }

  addPet = (pet) => {
    const pets = this.state.petList;

    pets.push(pet);
    
    this.setState({ pets });

    console.log(this.state)
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
        { currentPet
          ? <PetDetails currentPet={currentPet} />
          : <div></div>
        }
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */}
          <PetList pets={this.state.petList} selectPet={this.selectPet} removePet={this.removePet}/>
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */}
          <NewPetForm addPetCallback={this.addPet} />
        </section>
      </main>
    );
  }
}

export default App;
