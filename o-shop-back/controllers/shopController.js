const shopDataMapper = require('../dataMapper/shopDataMapper');
const CustomError = require('../helpers/CustomError');

module.exports = {

    getAllShop: async (request, response, next) => {
        const shop = await shopDataMapper.getAllShop();
        response.status(200).json({
            success: true,
            data: shop
        });
    },

    getOneShop: async (request, response, next) => {
        const { id } = request.params;
        
        const shop = await shopDataMapper.getOneShop(id);
        if (shop == null) {
            return next(new CustomError("Shop not exist", 400));
        }
        response.status(200).json({
            success: true,
            data: shop
        });
    },

    getAllShopByUser: async (request, response, next) => {
        // const {shopId, userId} = request.params;
        // const shops = await shopDataMapper.getAllShopByUser(shopId, userId);
        response.status(200).json({
            success: true,
            message: "Work in progress"
        });
    },

    createShop: async (request, response, next) => {
        const shopInfo = request.body;
        console.log(shopInfo);
        const shop = await shopDataMapper.addOneShop(shopInfo);
        if (shop == null) {
            return next(new CustomError("Shop already exist", 400));
        }

        response.status(200).json({
            success: true,
            data: shop
        });
    },

    updateShop: async (request, response, next) => {
        const {id} = request.params;
        const shopInfo = request.body;
        const shop = await shopDataMapper.updateOneShop(id,shopInfo);
        if (shop == null) {
            return next(new CustomError("Shop not exist", 400));
        }

        response.status(200).json({
            success: true,
            data: shop
        });
    },

    deleteShop: async (request, response, next) => {
        const {id} = request.params;
        const shop = await shopDataMapper.deleteOneShop(id);

        if (shop == null) {
            return next(new CustomError("Shop not exist", 400));
        }

        response.status(200).json({
            success: true,
            data: shop
        });
    }

}