const productDataMapper = require('../dataMapper/productDataMapper');

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
        response.status(200).json({
            id: id,
            success: true
        })
    },

    getProductsByCategoryId: async (request, response, next) => {
        const {categoryId} = request.params;
        response.status(200).json({
            id: categoryId,
            success: true
        })
    },

    addNewProduct: async (request, response, next) => {
        response.status(200).json({
            success: true,
            message: "product added"
        });
    },

    updateProduct: async (request, response, next) => {
        const {id} = request.params;
        response.status(200).json({
            success: true,
            message: `product ${id} updated`
        });
    },

    deleteProduct: async (request, response, next) => {
        const {id} = request.params;
        response.status(200).json({
            success: true,
            message: `product ${id} deleted`
        });
    },

    
}