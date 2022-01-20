const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Pet } = require('../models');

// get pets by user
router.get('/', (req,res) => {
    Pet.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'pet_name', 'pet_age', 'pet_sex', 'pet_type'],
    })
    .then(dbPetData => {
        const pets = dbPetData.map(pet => pet.get({plain: true}))
        res.render('pets', { pets })
    })
})

module.exports = router;