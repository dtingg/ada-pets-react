import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      species: "",
      location: "",
      images: "",
      about: "",
    };
  }
  
  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onSpeciesChange = (event) => {
    this.setState({
      species: event.target.value,
    });
  }

  onLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  }

  onImageChange = (event) => {
    this.setState({
      images: event.target.value,
    });
  }

  onAboutChange = (event) => {
    this.setState({
      about: event.target.value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  
    const newPet = {
      name: this.state.name,
      species: this.state.species,
      location: this.state.location,
      images: [this.state.images.split(", ")],
      about: this.state.about,
    };

    this.setState({
      name: "",
      species: "",
      location: "",
      images: "",
      about: "",
    });

    console.log(newPet)

    this.props.addPetCallback(newPet);
  }

  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.onFormSubmit}>
        <h3>Add a Pet</h3>
        { /* A form should go here! */ }
        <div>
          <label className="new-pet-form--label" htmlFor="name">Name</label>
          <input onChange={this.onNameChange} value={this.state.name} name="name" placeholder="name" />
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="name">Species</label>
          <input onChange={this.onSpeciesChange} value={this.state.species} species="species" placeholder="species"/>
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="name">Location</label>
          <input onChange={this.onLocationChange} value={this.state.location} location="location" placeholder="location"/>
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="name">Image</label>
          <input onChange={this.onImageChange} value={this.state.images} image="image" placeholder="image link"/>
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="name">About</label>
          <div>
            <textarea className="new-pet-form--about" onChange={this.onAboutChange} value={this.state.about} about="about" />
          </div>
        </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }
}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
