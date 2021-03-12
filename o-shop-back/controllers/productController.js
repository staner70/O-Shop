const productDataMapper = require('../dataMapper/productDataMapper');
const CustomError = require('../helpers/CustomError');

const productController = {
    
    getAllProducts: async (request, response, next) => {
       
        let products;
        let stock = null;
   
         // cette partie gere la fonction de recherche
        if (request.query.search) {
            let searchObject = request.query.search.split(' ');
            searchObject = searchObject.join(' | ');
            // le searchObject correspond (ou barcode) a celui dans le product DataMapper
            products = await productDataMapper.getAllProduct(searchObject);
        } else {
            products = await productDataMapper.getAllProduct();
        }
    // Ici on envoie une info dans la requete si le stock est inferieur a un certain nombre
        for (const product of products) {
            
            if (product.quantity <= 3) {
                product.stock = `stock bas`;
            } if (product.quantity <= 0) {
               product.stock = `rupture de stock`;
            }
        }


        response.status(200).json({
            success: true,
            data: products
        });
    },

    getOneProduct: async (request, response, next) => {
        
        const {id} = request.params;
        let stock = null;
        const product = await productDataMapper.getOneProduct(id);
        if (product.quantity <= 3) {
            product.stock = `stock bas`;
        } if (product.quantity <= 0) {
           product.stock = `rupture de stock`;
        }
        
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
        
        const product = await productDataMapper.addOneProduct(productInfo);
        if (product == null) {
            return next(new CustomError("Product already exist", 400));
        }
        response.status(200).json({
            success: true,
            message: "product added",
            data: product
        });
    },

    updateProduct: async (request, response, next) => {
       
        const {id} = request.params;
        const productInfo = request.body;
        let stock;
        const product = await productDataMapper.updateOneProduct(id,productInfo);
        if (product == null) {
            return next(new CustomError("Product not exist", 400));
        }
        if (product.quantity <= 3) {
            product.stock = `stock bas`;
        } if (product.quantity <= 0) {
           product.stock = `rupture de stock`;
        }
       
        response.status(200).json({
            success: true,
            message: stock || `product ${id} updated`,
            data: product
        });
    },

    deleteProduct: async (request, response, next) => {
        const {id} = request.params;
        const product = await productDataMapper.deleteOneProduct(id);
        if (product == null) {
            return next(new CustomError("Product not exist", 400));
        }
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
            const product = await productDataMapper.imageUpload(productImage, id);
            
            res.status(200)
            .json({
                success: true,
                message: "Image Upload Successfull",
                data: product
            });



    },

    updateQuantityById: async (request, response, next) => {
       
        const newProduct = [];
        const cart = request.body;
        
        for (const product of cart) {
            const {id, qty} = product;

            const newStock = await productDataMapper.updateQuantityById(id, qty);
            newProduct.push(newStock);
           
        }

        response.status(200)
        .json({
            success: true,
            message: "Quantity updated",
            data: newProduct
        });
    },

    
}

module.exports = productController;