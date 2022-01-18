const cloudinary = require('cloudinary').v2;

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
  cloud_name: 'spaghettimedic',
  api_key: '653992728525367',
  api_secret: 'V9L8hjVuH_VYGj5y3rRp4KkUubM',
  secure: true
});

exports.myconfig = myconfig;