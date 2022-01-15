const { Pet } = require('../models');

const petData = [
  {
    pet_name: 'Sparky',
    pet_age: 3,
    pet_sex: 'male',
    pet_type: 'dog',
    user_id: 1
  },
  {
    pet_name: 'Onyx',
    pet_age: 9,
    pet_sex: 'male',
    pet_type: 'cat',
    user_id: 2
  },
  {
    pet_name: 'Jeffrey',
    pet_age: 1,
    pet_sex: 'female',
    pet_type: 'lizard/snake',
    user_id: 3
  },
  {
    pet_name: 'Polly',
    pet_age: 2,
    pet_sex: 'female',
    pet_type: 'bird',
    user_id: 4
  },
  {
    pet_name: 'Clive',
    pet_age: 1,
    pet_sex: 'male',
    pet_type: 'rodent',
    user_id: 5
  },
  {
    pet_name: 'Clyde',
    pet_age: 2,
    pet_sex: 'male',
    pet_type: 'fish',
    user_id: 6
  },
  {
    pet_name: 'Bonnie',
    pet_age: 1,
    pet_sex: 'female',
    pet_type: 'plant',
    user_id: 7
  },
  {
    pet_name: 'Jake from StateFarm',
    pet_age: 29,
    pet_sex: 'male',
    pet_type: 'insurance representative',
    user_id: 7
  }
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;