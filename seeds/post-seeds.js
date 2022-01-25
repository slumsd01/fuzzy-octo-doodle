const { Post } = require('../models');

const postData = [
  {
    title: 'Looking for pet sitter',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 7
  },
  {
    title: 'Looking for pet sitter',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 6
  },
  {
    title: 'Availability for pet sitting',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 7
  },
  {
    title: 'Looking for pet sitter',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 5
  },
  {
    title: 'Looking for pet sitter',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 4
  },
  {
    title: 'Availability for pet sitting',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 3
  },
  {
    title: 'Looking for pet sitter',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 3
  },
  {
    title: 'Availability for pet sitting',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 2
  },
  {
    title: 'Looking for pet sitter',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 2
  },
  {
    title: 'Looking for pet sitter',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 7
  },
  {
    title: 'Availability for pet sitting',
    post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor vitae purus faucibus ornare suspendisse.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
