const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Post, Comment, Pet } = require('../../models');

// get all pets
router.get('/', (req, res) => {
  Pet.findAll({
    attributes: [
      'id',
      'pet_name',
      'pet_age',
      'pet_sex',
      'pet_type',
      'user_id',
      [sequelize.literal('(SELECT username FROM user WHERE pet.user_id = user.id)'), 'owner']
    ]
  })
  .then(dbPetData => res.json(dbPetData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
