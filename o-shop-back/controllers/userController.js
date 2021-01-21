const userDataMapper = require('../dataMapper/userDataMapper');

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
        const objectUser = request.body;
        const user = await userDataMapper.addOneUser(objectUser);
        response.status(200).json({
            success: true,
            message: "user added",
            user: user
        });
    },

    updateOneUser: async (request, response, next) => {
        const {id} = request.params;
        response.status(200).json({
            success: true,
            message: `user with ${id} updated`
        });
    },

    deleteOneUser: async (request, response, next) => {
        const {id} = request.params;
        response.status(200).json({
            success: true,
            message: `user with ${id} deleted`
        });
    },
}