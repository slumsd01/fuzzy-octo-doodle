const { Pet } = require('../models');

const petData = [
  {
    pet_name: 'Sparky', // id: 1
    pet_age: 3,
    pet_sex: 'male',
    pet_type: 'dog',
    user_id: 1
  },
  {
    pet_name: 'Onyx', // id: 2
    pet_age: 9,
    pet_sex: 'male neutered',
    pet_type: 'cat',
    user_id: 2
  },
  {
    pet_name: 'Jeffrey', // id: 3
    pet_age: 1,
    pet_sex: 'female',
    pet_type: 'dog',
    user_id: 3
  },
  {
    pet_name: 'Polly', // id: 4
    pet_age: 2,
    pet_sex: 'female spayed',
    pet_type: 'cat',
    user_id: 4
  },
  {
    pet_name: 'Clive', // id: 5
    pet_age: 1,
    pet_sex: 'male neutered',
    pet_type: 'dog',
    user_id: 5
  },
  {
    pet_name: 'Clyde', // id: 6
    pet_age: 2,
    pet_sex: 'male',
    pet_type: 'cat',
    user_id: 6
  },
  {
    pet_name: 'Bonnie', // id: 7
    pet_age: 1,
    pet_sex: 'female spayed',
    pet_type: 'cat',
    user_id: 7
  },
  {
    pet_name: 'Jake', // id: 8
    pet_age: 19,
    pet_sex: 'male neutered',
    pet_type: 'cat',
    user_id: 7
  }
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;