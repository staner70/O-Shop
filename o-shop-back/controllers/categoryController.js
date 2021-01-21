const categoryDataMapper = require('../dataMapper/categoryDataMapper');

module.exports = {

    getAllCategories: async (request, response, next) => {

        response.status(200).json({
            success: true
        });
    },

    getOneCategory: async (request, response, next) => {

        response.status(200).json({
            success: true
        });
    },

    createCategory: async (request, response, next) => {
        const categoryInfo = request.body;
        const category = await categoryDataMapper.addOneCategory(categoryInfo);
        response.status(200).json({
            success: true,
            data: category
        });
    },

    updateCategory: async (request, response, next) => {

        response.status(200).json({
            success: true
        });
    },

    deleteCategory: async (request, response, next) => {

        response.status(200).json({
            success: true
        });
    },
}