const roleDataMapper = require('../dataMapper/roleDataMapper');
const CustomError = require('../helpers/CustomError');

module.exports = {

    getAllRole: async (request, response, next) => {
        const role = await roleDataMapper.getAllRole();
        response.status(200).json({
            success: true,
            data: role
        });
    },
    addOneRole: async (request, response, next) => {
        const {name}  = request.body;
        const role = await roleDataMapper.addOneRole(name);
        if (role == null) {
            return next(new CustomError("Role already exist", 400));
        }
        response.status(200).json({
            success: true,
            message: "role added",
            data: role
        });
    },
    updateRole: async (request, response, next) => {
        const {name} = request.body;
        const {id} = request.params;
        
        const role = await roleDataMapper.updateOneRole(id,name);
        
        if (role == null) {
            return next(new CustomError("Role not exist with that id", 400));
        }
        response.status(200).json({
            success: true,
            message: "role updated",
            data: role
        })
    },

    deleteRole: async (request, response, next) => {
        const {id} = request.params;

        const role = await roleDataMapper.deleteOneRole(id);
        if (role == null) {
            return next(new CustomError("Role not exist with that id", 400));
        }

        response.status(200).json({
            success: true,
            message: `role with id: ${id} deleted`,
            data: role
        })
    },
}