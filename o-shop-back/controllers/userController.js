const userDataMapper = require('../dataMapper/userDataMapper');
const CustomError = require('../helpers/CustomError');
const bcrypt = require('bcryptjs');

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
        
        let salt = await bcrypt.genSalt(8);
        let hash = await bcrypt.hash(userInfo.password, salt);
        console.log(hash);
        userInfo.password = hash;

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
        let salt = await bcrypt.genSalt(8);
        let hash = await bcrypt.hash(userInfo.password, salt);
        console.log(hash);
        userInfo.password = hash;
        const user = await userDataMapper.updateOneUser(id, userInfo);
        if (user == null) {
            return next(new CustomError("User not exist", 400));
        }
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

    associateWork: async (request, response, next) => {
        const {userId, shopId} = request.params;
        const associate = await userDataMapper.associateWork(userId, shopId);

        if (associate == null) {
            return next(new CustomError("Associate already exist", 400));
        }
       
        response.status(200).json({
            success: true,
            message: `user with id: ${userId} associated shop with id: ${shopId}`,// au lieu de ${userId} faudrait retourner un nom , prénom et username et ${shopId} retourner un nom et une address
            data: associate
        });
    },

    dissociateWork: async (request, response, next) => {
        const {userId, shopId} = request.params;
        const dissociate = await userDataMapper.dissociateWork(userId, shopId);
        if (dissociate == null) {
            return next(new CustomError("Associate NOT exist", 400));
        }
        response.status(200).json({
            success: true,
            message: `user with id: ${userId} dissociated shop with id: ${shopId}`,
            data: dissociate
        });
    }
}