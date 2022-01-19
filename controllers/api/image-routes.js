const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Pet, Image } = require('../../models');

const fs = require('fs');

// get all images
router.get('/', (req, res) => {
  Image.findAll({
    attributes: [
      'id',
      'file_type',
      'image_name',
      'image_data',
      'user_id',
      'pet_id',
      [sequelize.literal('(SELECT username FROM user WHERE image.user_id = user.id)'), 'user_image'],
      [sequelize.literal('(SELECT pet_name FROM pet WHERE image.pet_id = pet.id)'), 'pet_image']
    ]
  })
  .then(dbImageData => res.json(dbImageData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get one image
router.get('/:id', (req, res) => {
  Image.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Pet,
        attributes: [
          'pet_name',
          [sequelize.literal('(SELECT username FROM user WHERE pet.user_id = user.id)'), 'owner']
        ]
      }
    ]
  })
  .then(dbImageData => {
    if (!dbImageData) {
      res.status(404).json({ message: 'No Image found with this id' });
      return;
    }
    res.json(dbImageData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// upload new image
router.post('/', (req, res) => {
  Image.create({
    file_type: req.file.mimetype,
    image_name: req.file.originalname,
    image_data: fs.readFileSync(
      __basedir + '/resources/uploads/' + req.file.filename
    )
  })
  .then((dbImageData) => {
    fs.writeFileSync(
      __basedir + '/resources/tmp/' + dbImageData.image_name
    );
    return res.send('Image has been uploaded.');
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete an image
router.delete('/:id', (req, res) => {
  Image.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbImageData => {
    if (!dbImageData) {
      res.status(404).json({ message: 'No Image found with this id' });
      return;
    }
    res.json(dbImageData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
