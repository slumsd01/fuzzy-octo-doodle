const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Pet } = require('../../models');
const withAuth = require('../../utils/auth');

// get all Posts
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'post_body',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Pet,
        attributes: ['pet_name', 'pet_age', 'pet_sex', 'pet_type']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: [
          {
            model: User,
            attributes: ['username']
          }
        ]
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get a Post
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'post_body',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Pet,
        attributes: ['pet_name', 'pet_age', 'pet_sex', 'pet_type']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No Post found with this id' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create new Post
router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_body: 'https://taskmaster.com/press', pet_id: 2, user_id: 1}
  Post.create({
    title: req.body.title,
    post_body: req.body.post_body,
    user_id: req.session.user_id
  })
  .then(dbPostData => {res.json(dbPostData), console.log(dbPostData)})
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// update Post
router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      post_body: req.body.post_body,
      pet_id: req.body.pet_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete a Post
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
