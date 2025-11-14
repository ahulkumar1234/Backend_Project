const multer = require('multer');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed'), false);
    }
};


const upload = multer({ storage: storage, fileFilter: fileFilter });


module.exports = upload;















// -> There is a two type of storages
// -> one is Disk Storage (when we save data/file in server).
// -> second is Memory Storage (when we save data/file in the server for temporary and later you want to delete then use Memory storage).