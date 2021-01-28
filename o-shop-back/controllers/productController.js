const productDataMapper = require('../dataMapper/productDataMapper');
const CustomError = require('../helpers/CustomError');
const s3 = require('../config/s3.config.js');
// const aws = require('aws-sdk');
const fs = require('fs');
module.exports = {

    getAllProducts: async (request, response, next) => {
        const products = await productDataMapper.getAllProduct();
        response.status(200).json({
            success: true,
            data: products
        });
    },

    getOneProduct: async (request, response, next) => {
        const {id} = request.params;
        const product = await productDataMapper.getOneProduct(id);
        // if (product == null) {
        //     return next(new CustomError("Produit not exist", 400));
        // }
        response.status(200).json({
            success: true,
            data: product
        })
    },

    getProductsByCategoryId: async (request, response, next) => {
        const {categoryId} = request.params;
        const productsByCategory = await productDataMapper.getProductsByCategory(categoryId);
        if (productsByCategory == null) {
            return next(new CustomError("Category not exist", 400));
        }
        response.status(200).json({
            
            success: true,
            data: productsByCategory
        })
    },

    addNewProduct: async (request, response, next) => {
        const productInfo = request.body;
        console.log("addOneProduct");
        // console.log(request.file);
        var params = {
            ACL: 'public-read',
            Bucket: process.env.AWS_BUCKET_NAME,
            Body: fs.createReadStream(request.file.path),
            Key: `uploads/${request.file.originalname}`
        };
        
        s3.upload(params, async (err, data) => {
            if (err) {
              console.log('Error occured while trying to upload to S3 bucket', err);
            }
            console.log(data , '<= data');
            if (data) {
               
              fs.unlinkSync(request.file.path); // Empty temp folder
              productInfo.image = data.Location;

              const product = await productDataMapper.addOneProduct(productInfo);
              if (product == null) {
                  return next(new CustomError("Product already exist", 400));
              }
              response.status(200).json({
                  success: true,
                  message: "product added",
                  data: product
              });

            }
          });




    },

    updateProduct: async (request, response, next) => {
        const {id} = request.params;
        const productInfo = request.body;
        var params = {
            ACL: 'public-read',
            Bucket: process.env.AWS_BUCKET_NAME,
            Body: fs.createReadStream(request.file.path),
            Key: `uploads/${request.file.originalname}`
        };

        const oldImage = await productDataMapper.getOneProduct(id);

        const regex = /(?:[^/][\d\w\.]+)+$/g;

        const deleteImage = regex.exec(oldImage.image)[0];
        console.log(deleteImage);
        s3.deleteObject({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/${deleteImage}`
        }, (err, data) => {
            console.error(err);
            console.log(data);
        });

        s3.upload(params, async (err, data) => {
            if (err) {
              console.log('Error occured while trying to upload to S3 bucket', err);
            }
            // console.log(data , '<= data');
            if (data) {
               
              fs.unlinkSync(request.file.path); // Empty temp folder
              productInfo.image = data.Location;
            //   console.log(productInfo);
              const product = await productDataMapper.updateOneProduct(id,productInfo);
              if (product == null) {
                  return next(new CustomError("Product not exist", 400));
              }
              
              response.status(200).json({
                  success: true,
                  message: `product ${id} updated`,
                  data: product
              });


            }
          });


    },

    deleteProduct: async (request, response, next) => {
        const {id} = request.params;
        const product = await productDataMapper.deleteOneProduct(id);
        if (product == null) {
            return next(new CustomError("Product not exist", 400));
        }
        const regex = /(?:[^/][\d\w\.]+)+$/g;

        const deleteImage = regex.exec(product.image)[0];
        console.log(deleteImage);
        s3.deleteObject({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/${deleteImage}`
        }, (err, data) => {
            console.error(err);
            console.log(data);
        });

        response.status(200).json({
            success: true,
            message: `product ${id} deleted`,
            data: product
        });
    },

    imageUpload: async(req, res, next) => {
        
            // we are looking for the id of product
            const productImage = req.savedProductImage;
            const {id} = req.params;
            console.log(req.body);
            console.log(id);
           

            var params = {
                ACL: 'public-read',
                Bucket: process.env.AWS_BUCKET_NAME,
                Body: fs.createReadStream(req.file.path),
                Key: `uploads/${req.file.originalname}`
            };
            
            s3.upload(params, async (err, data) => {
                if (err) {
                  console.log('Error occured while trying to upload to S3 bucket', err);
                }
                console.log(data , '<= data');
                if (data) {
                   
                  fs.unlinkSync(req.file.path); // Empty temp folder
                  const locationUrl = data.Location;

                  const product = await productDataMapper.imageUpload(locationUrl, id);
                  res.status(200)
                  .json({
                      success: true,
                      message: "Image Upload Successfull",
                      data: product
                  });
 
                }
              });

  
            }
            








    
}