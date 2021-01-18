
module.exports = {

    getAllUser: async (request, response, next) => {
        response.status(200).json({
            success: true
        });
    },

    getOneUser: async (request, response, next) => {
        const {id} = request.params;
        response.status(200).json({
            id: id,
            success: true
        })
    },

    addOneUser: async (request, response, next) => {
        response.status(200).json({
            success: true,
            message: "user added"
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