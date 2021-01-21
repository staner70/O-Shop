const CustomError = require("../helpers/CustomError");
const client = require('../dataMapper/client');
const {validateUserInput} = require('../helpers/input/inputHelpers');
const {sendJwtToClient} = require('../helpers/authorization/tokenhelper');

module.exports = {

    login: async (request, response, next) => {

        try {
            const {username, password} = request.body;
            if (!validateUserInput(username, password)) {
                return next(new CustomError("Please check your inputs", 400));
            }

            const result = await client.query(`SELECT * FROM "user" WHERE username = $1 AND password = $2`, [username, password]);

            console.log(result.rows[0], password);
            // if (!comparePassword(password, user.password)) {
            //     return next(new CustomError("Please check your credentials",400));
            // }
            if (!result.rows[0]) {
                response.json({
                    success: false,
                    message: "Authentication failed"
                });
            }
            // response.json({
            //     success: true
            // });
            const user = result.rows[0];
            sendJwtToClient(user,response);  

        } catch (error) {
            console.log(error);
        }
        

    },

    logOut: async (request, response, next) => {
       
        const { NODE_ENV } = process.env;

        return response.status(200).cookie({
            httpOnly: true,
            expires: new Date(Date.now()),
            secure: NODE_ENV === "development" ? false : true
        }).json({
            success: true,
            message: "Logout Successfull"
        });
    },

    profil: async (request, response, next) => {
        response.json({
            success: true,
            data: {
                id: request.user.id,
                username: request.user.username
            }
        })
    },
}