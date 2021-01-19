const CustomError = require("../helpers/CustomError");

module.exports = {

    login: async (request, response, next) => {

        try {
            const {username, password} = request.body;
            if (!validateUserInput(username, password)) {
                return next(new CustomError("Please check your inputs", 400));
            }

            console.log(request.body);
            response.status(200).json({
                success: true,
                username: username,
                password: password
            });

        } catch (error) {
            
        }
        

    },

    logOut: async (request, response, next) => {
       
        response.status(200).json({
            success: true
        })
    },

    profil: async (request, response, next) => {
        const {id} = request.params;
        response.status(200).json({
            id: id,
            success: true
        })
    },
}