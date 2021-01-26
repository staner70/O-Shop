const categoryDataMapper = require('../dataMapper/categoryDataMapper');
const CustomError = require('../helpers/CustomError'); 

module.exports = {

    getAllCategories: async (request, response, next) => {
        const categories = await categoryDataMapper.getAllCategories();
        response.status(200).json({
            success: true,
            data: categories
        });
    },

    getOneCategory: async (request, response, next) => {
        const {id} = request.params;
        const category = await categoryDataMapper.getOneCategory(id);
        if (category == null) {
            return next(new CustomError("Category not exist", 400));
        }
        response.status(200).json({
            success: true,
            data: category
        });
    },

    createCategory: async (request, response, next) => {
  
            const categoryInfo = request.body;
            const category = await categoryDataMapper.addOneCategory(categoryInfo);
            if (category == null) {
                return next(new CustomError("Category already exist", 400));
            }
            response.status(200).json({
                success: true,
                data: category
            });


    },

    updateCategory: async (request, response, next) => {
        const {id} = request.params;
        const categoryInfo = request.body;
        const category = await categoryDataMapper.updateOneCategory(id, categoryInfo);
        if (category == null) {
            return next(new CustomError("Category not exist", 400));
        }
        response.status(200).json({
            success: true,
            data: category
        });
    },

    deleteCategory: async (request, response, next) => {
        const {id} = request.params;
        const category = await categoryDataMapper.deleteOneCategory(id);
        if (category == null) {
            return next(new CustomError("Category not exist", 400));
        }
        response.status(200).json({
            success: true,
            data: category
        });
    },
}