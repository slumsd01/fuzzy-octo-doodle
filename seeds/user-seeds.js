const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'slumsd01',
    email: 'sarah@email.com',
    password: 'password',
    user_type: 'owner'
  },
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password',
    user_type: 'owner'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password',
    user_type: 'owner'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password',
    user_type: 'owner'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password',
    user_type: 'owner'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password',
    user_type: 'owner'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password',
    user_type: 'owner'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password',
    user_type: 'owner'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password',
    user_type: 'sitter'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password',
    user_type: 'sitter'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password',
    user_type: 'sitter'
  },
  {
    username: 'spaghettimedic',
    email: 'example@gmail.com',
    password: 'password',
    user_type: 'owner'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
