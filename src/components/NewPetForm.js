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
      image: "",
      about: "",
    };
  }
  
  onNameChange = (event) => {
    console.log("Name field updated");
    this.setState({
      name: event.target.value,
    });
  }

  onSpeciesChange = (event) => {
    console.log("Species field updated");
    this.setState({
      name: event.target.value,
    });
  }

  onLocationChange = (event) => {
    console.log("Location field updated");
    this.setState({
      location: event.target.value,
    });
  }

  onImageChange = (event) => {
    console.log("Image field updated");
    this.setState({
      image: event.target.value,
    });
  }

  onAboutChange = (event) => {
    console.log("About field updated");
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
      image: this.state.image,
      about: this.state.about,
    };

    this.setState({
      name: "",
      species: "",
      location: "",
      image: "",
      about: "",
    });

    console.log(newPet)

    // this.props.addPetCallback(newPet);

  }

  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.onFormSubmit}>
        <h3>Add a Pet</h3>
        { /* A form should go here! */ }
        <div>
          <label htmlFor="name">Name:</label>
          <input onChange={this.onNameChange} value={this.state.name} name="name" />
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