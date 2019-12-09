import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {

  const pets = props.pets
  console.log(pets)

  const petCollection = pets.map((pet, i) => {  
    return (
      <PetCard
      key={pet.id}
      {...pet}
      />

    );

  });


//       <h2>{ props.side } Playlist</h2>
//       <p>
//         {trackCount} tracks - {playtime}
//       </p>
//       <ul className="playlist--track-list">
//         { trackElements }
//       </ul>


  return (
    <div className="card-group">
      { petCollection }
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
