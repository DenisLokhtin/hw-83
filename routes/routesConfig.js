const multer = require('multer');
const path = require('path');
const config = require('../config');

const {nanoid} = require("nanoid");
const ID = nanoid();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

module.exports = upload;