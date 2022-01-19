const { Post } = require('../models');

const postData = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body: 'Looking for someone to take care of my plant',
    user_id: 7,
    pet_id: 7
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: 'Looking for a pet-sitter',
    user_id: 6,
    pet_id: 6
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_body: 'Looking for a sitter for my insruance agent',
    user_id: 7,
    pet_id: 8
  },
  {
    title: 'Nunc purus.',
    post_body: 'Looking for a pet-sitter',
    user_id: 5,
    pet_id: 5
  },
  {
    title: 'Pellentesque eget nunc.',
    post_body: 'Looking for a pet-sitter',
    user_id: 4,
    pet_id: 4
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_body: 'Looking for a pet-sitter',
    user_id: 3,
    pet_id: 3
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body: 'found a sitter but will need another for a different day!',
    user_id: 3,
    pet_id: 3
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: 'Looking for a pet-sitter',
    user_id: 2,
    pet_id: 2
  },
  {
    title: 'Duis ac nibh.',
    post_body: 'Looking for a pet-sitter',
    user_id: 2,
    pet_id: 2
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_body: 'need a new plant-sitter, last one quit',
    user_id: 7,
    pet_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body: 'Looking for a pet-sitter',
    user_id: 1,
    pet_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
