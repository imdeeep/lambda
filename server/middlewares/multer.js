import multer from 'multer';

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const multerUpload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

const singleAvatar = multerUpload.single('avatar');
const sendAttachmentsMulter = multerUpload.array('files',5);

export { singleAvatar,sendAttachmentsMulter };
