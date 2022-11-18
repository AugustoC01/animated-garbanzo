const multer = require('multer');

const storage = multer.diskStorage({
  storage: (req, file, cb) => {
    cb(null, 'public/avatars');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now().toLocaleString}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single('avatar');
module.exports = upload;
