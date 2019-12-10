import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const PetList = (props) => {
  const pets = props.pets

  const petCollection = pets.map((pet, i) => {  
    return (
      <PetCard
      key={pet.id}
      {...pet}
      selectPet={ props.selectPet }
      removePet={ props.removePet }
      />
    );
  });

  return (
    <div className="card-group">
      { petCollection }
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  selectPet: PropTypes.func,
  removePet: PropTypes.func,
};

export default PetList;
