
module.exports = {

    login: async (request, response, next) => {
        const {username, password} = request.body;
        console.log(request.body);
        response.status(200).json({
            success: true,
            username: username,
            password: password
        });
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