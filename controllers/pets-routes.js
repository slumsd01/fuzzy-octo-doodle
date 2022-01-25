const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Pet } = require('../models');

// get all user pets
router.get('/', (req, res) => {
  Pet.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'pet_name',
      'pet_age',
      'pet_sex',
      'pet_type'
    ]
  })
  .then(dbPetData => {
    console.log(dbPetData);
    const pets = dbPetData.map(pet => pet.get({ plain: true }));
    res.render('pets', { pets, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/pets', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/pets');
      return;
    }
  
    res.render('/');
  });

module.exports = router;