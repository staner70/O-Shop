const multer = require('multer');
const path = require('path');
const CustomError = require('../../helpers/CustomError');

// Storage, FileFilter

const storage = multer.diskStorage({
    destination: function(req,file,callback){
        
        const rootDir = path.dirname(require.main.filename);
        // callback(null, path.join(rootDir, "/o-shop-back/public/uploads"));
        callback(null, path.join(rootDir, "/o-shop-back/public/uploads"));
    },
    filename: function(req,file,callback) {
        
        const extension = file.mimetype.split('/')[1];
        // req.savedProductImage = "image_" + req.params.id + "." + extension;
        req.savedProductImage = file.originalname;
        callback(null, req.savedProductImage);
    }
});

const fileFilter = (req,file,callback) => {
    let allowedMimeTypes = ["image/jpg","image/gif","image/jpeg","image/png"];

    if(!allowedMimeTypes.includes(file.mimetype)){
        return callback(new CustomError("Please provide a valid image file", 400), false);

    }
    return callback(null, true);
};

const maxSize = 10 * 1024 * 1024;
console.log(maxSize);
const productImageUpload = multer({storage, fileFilter, limits:{fileSize: maxSize}});

module.exports = {productImageUpload};

