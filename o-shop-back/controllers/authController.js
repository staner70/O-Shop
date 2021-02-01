const CustomError = require("../helpers/CustomError");
const client = require('../dataMapper/client');
const {validateUserInput, comparePassword} = require('../helpers/input/inputHelpers');
const {sendJwtToClient} = require('../helpers/authorization/tokenhelper');

module.exports = {

    login: async (request, response, next) => {

        try {
            const {username, password} = request.body;
            if (!validateUserInput(username, password)) {
                return next(new CustomError("Please check your inputs", 400));
            }
           console.log(password, "<<--login");
            // we look for the info of the user: the username and the role
            const result = await client.query(`SELECT u.* , r.name AS role_name FROM "user" As u JOIN "role" AS r ON u.role_id = r.id WHERE username = $1`, [username]);
                if (!result.rows[0]) {
                return response.json({
                    success: false,
                    message: "Authentication failed"
                });
            }

            console.log(result.rows[0].password, password);
            if (!comparePassword(password, result.rows[0].password)) {
                return next(new CustomError("Please check your credentials",400));
            }


            const user = result.rows[0];
           
            sendJwtToClient(user,response);  

        } catch (error) {
            console.log(error);
        }
        

    },

    logOut: async (request, response, next) => {
       const date = new Date(Date.now() - 600000);
       
        const { NODE_ENV } = process.env;
        console.log(date.toGMTString());
        return response.status(200).cookie({
            httpOnly: true,
            expires:date.toUTCString(),
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