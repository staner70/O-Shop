const productDataMapper = require('../dataMapper/productDataMapper');
const CustomError = require('../helpers/CustomError');

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
        if (product == null) {
            return next(new CustomError("Produit not exist", 400));
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
        const product = await productDataMapper.updateOneProduct(id,productInfo);
        response.status(200).json({
            success: true,
            message: `product ${id} updated`,
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

    
}