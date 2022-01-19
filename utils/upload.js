const res = require('express/lib/response');
const multer = require('multer');

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('This uploader only accepts images.', false);
  }

  if (req.file == undefined) {
    return res.send('No file selected.');
  }
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/resources/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-sitStay-${file.originalname}`);
  }
});

let uploadFile = multer({ storage: storage, fileFilter: imageFilter });

module.exports = uploadFile;
