import React, { Component } from 'react';
import axios from "axios"
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
      petList: [], //pets,
      currentPet: undefined,
      error: undefined,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/pets')
      .then((response) => {
        this.setState({ petList: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  selectPet = (petId) => {
    let selectedPet = pets.find((pet) => pet.id === petId);

    this.setState({
      currentPet: selectedPet,
    }); 
  }

  removePet = (petId) => {
    axios.delete(`http://localhost:3000/pets/${ petId }`)
      .then((response) => {
        const petList = this.state.petList.filter((pet) => pet.id !== petId);
  
        this.setState({
          petList,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  addPet = (pet) => {
    axios.post('http://localhost:3000/pets', pet)
      .then((response) => {
        const { petList } = this.state;
        petList.push(response.data);
        this.setState({ 
          petList,
          error: undefined, 
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        })
      });
  }

  render () {
    const { currentPet } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section>
          {this.state.error}
        </section>
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
