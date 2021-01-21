const userDataMapper = require('../dataMapper/userDataMapper');
const CustomError = require('../helpers/CustomError');

module.exports = {

    getAllUser: async (request, response, next) => {
        const users = await userDataMapper.getAllUser();
        response.status(200).json({
            success: true,
            data: users
        });
    },

    getOneUser: async (request, response, next) => {
        const {id} = request.params;
        const user = await userDataMapper.getOneUser(id);
        response.status(200).json({
            id: id,
            success: true,
            data: user
        });
    },

    addOneUser: async (request, response, next) => {
        const userInfo = request.body;
        const user = await userDataMapper.addOneUser(userInfo);
        if (user == null) {
            return next(new CustomError("User already exist", 400));
        }
        response.status(200).json({
            success: true,
            message: "user added",
            user: user
        });
    },

    updateOneUser: async (request, response, next) => {
        const {id} = request.params;
        const userInfo = request.body;
        const user = await userDataMapper.updateOneUser(id, userInfo);
        console.log(user);
        response.status(200).json({
            id: id,
            success: true,
            user: user
        });
    },

    deleteOneUser: async (request, response, next) => {
        const {id} = request.params;
        const user = await userDataMapper.deleteOneUser(id);
        if (user == null) {
            return next(new CustomError("User not exist", 400));
        }
        response.status(200).json({
            success: true,
            message: `user with ${id} deleted`,
            user: user
        });
    },
}