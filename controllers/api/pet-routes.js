const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Pet } = require('../../models');
const withAuth = require('../../utils/auth');

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

// get a pet
router.get('/:id', (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPetData => {
    if (!dbPetData) {
      res.status(404).json({ message: 'No pet found with this id' });
      return;
    }
    res.json(dbPetData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create new pet
router.post('/', withAuth, (req, res) => {
  // expects {pet_name: 'Gus', pet_age: 6, pet_sex: 'male', pet_type: 'dog', user_id: 9}
  Pet.create({
    pet_name: req.body.pet_name,
    pet_age: req.body.pet_age,
    pet_sex: req.body.pet_sex,
    pet_type: req.body.pet_type,
    user_id: req.session.user.id
  })
  .then(dbPetData => res.json(dbPetData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// update a pet
router.put('/:id', withAuth, (req, res) => {
  Pet.update(
    {
      pet_name: req.body.pet_name,
      pet_age: req.body.pet_age
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbPetData => {
    if (!dbPetData) {
      res.status(404).json({ message: 'No pet found with this id' });
      return;
    }
    res.json(dbPetData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete a pet
router.delete('/:id', withAuth, (req, res) => {
  Pet.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPetData => {
    if (!dbPetData) {
      res.status(404).json({ message: 'No pet found with this id' });
      return;
    }
    res.json(dbPetData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
