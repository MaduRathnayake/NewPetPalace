import React, { useState } from 'react';

const PetOwnerPage = () => {
  const [pets, setPets] = useState([]);

  const handleAddPet = () => {
    console.log('Add Pet');
  };

  return (
    <div>
      <h2>My Pets</h2>
      <button onClick={handleAddPet}>Add Pet</button>
      <div>
        {/* Display pets */}
        {pets.map((pet) => (
          <div key={pet.id}>
            <p>{pet.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetOwnerPage;