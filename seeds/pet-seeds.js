const sequelize = require('../config/connection');
const { User } = require('../models');

const petData = [
  {
    pet_name: 'Sparky',
    pet_age: 3,
    pet_sex: 'male',
    pet_type: 'dog',
    medical_req: NULL
  },
  {
    pet_name: 'Onyx',
    pet_age: 9,
    pet_sex: 'male',
    pet_type: 'cat',
    medical_req: 'diabetic, requires insulin shots based on a sliding scale when fed'
  },
  {
    pet_name: 'Jeffrey',
    pet_age: 1,
    pet_sex: 'female',
    pet_type: 'lizard/snake',
    medical_req: NULL
  },
  {
    pet_name: 'Polly',
    pet_age: 2,
    pet_sex: 'female',
    pet_type: 'bird',
    medical_req: "anxiety - only when she doesn't promptly get a cracker upon request"
  },
  {
    pet_name: 'Clive',
    pet_age: 1,
    pet_sex: 'male',
    pet_type: 'rodent',
    medical_req: NULL
  },
  {
    pet_name: 'Clyde',
    pet_age: 2,
    pet_sex: 'male',
    pet_type: 'fish',
    medical_req: 'fresh water and prompt feedings'
  },
  {
    pet_name: 'Bonnie',
    pet_age: 1,
    pet_sex: 'female',
    pet_type: 'plant',
    medical_req: 'requires a lot of sunlight, water, love, and affection'
  }
];

const seedPets = () => Pet.bulkCreate(petData, {individualHooks: true});

module.exports = seedPets;