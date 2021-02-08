const CustomError = require("../helpers/CustomError");
const client = require('../dataMapper/client');
const {validateUserInput, comparePassword} = require('../helpers/input/inputHelpers');
const {sendJwtToClient} = require('../helpers/authorization/tokenhelper');
const bcrypt = require('bcryptjs');
const userDataMapper = require('../dataMapper/userDataMapper');
const { addTokenToBlackList } = require("../helpers/authorization/redis.service");
const { isTokenIncluded, getAccessTokenFrom } = require('../helpers/authorization/tokenhelper');

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

            console.log(result.rows[0]);
            const user = result.rows[0];
           
            sendJwtToClient(user,response);  

        } catch (error) {
            console.log(error);
        }
        

    },

    logOut: async (request, response, next) => {

        const token = getAccessTokenFrom(request);
        // let token = request.header("access_token");
        await addTokenToBlackList(token);
        
        
        return response.status(200).cookie({
            httpOnly: true,
            expires: new Date(Date.now() -  1000 * 60),
            secure: true
        }).json({
            success: true,
            message: "Logout Successfull"
        });
    },

    profil: async (request, response, next) => {
        console.log(request.user,"<<Profil");
        const result = await client.query(`SELECT * FROM userView WHERE id = $1`, [request.user.id]);
        const profil = result.rows[0];
        response.json({
            success: true,
            data: profil
        })
    },

    updatePassword: async (request, response, next) => {
        console.log(request.body);
        
        let {username, oldPassword, newPassword, confirmPassword } = request.body;

        if (newPassword != confirmPassword) {
            return next(new CustomError("Please confirm your password", 400));
        }

        if (!validateUserInput(username, oldPassword)) {
            return next(new CustomError("Please check your inputs", 400));
        }

        const result = await client.query(`SELECT * FROM "user"  WHERE username = $1`, [username]);
        if (result.rowCount == 0) {
            return next(new CustomError("User not exist", 400));
        }

        if (!comparePassword(oldPassword, result.rows[0].password)) {
            return next(new CustomError("Please check your  password",400));
        }


        let salt = await bcrypt.genSalt(8);
        let hash = await bcrypt.hash(newPassword, salt);
        console.log(hash);
        newPassword = hash;
       
        const { id } = result.rows[0];
        console.log(id);
        const user = await userDataMapper.updatePassword(id, newPassword);
        console.log(user);

        
        response.status(200).json({
            success: true,
            data: user
        });
    },

    resetPassword: async (request, response, next) => {
        let {username, newPassword, confirmPassword } = request.body;

        if (newPassword != confirmPassword) {
            return next(new CustomError("Please confirm your password", 400));
        }

        const result = await client.query(`SELECT * FROM "user"  WHERE username = $1`, [username]);

        if (result.rowCount == 0) {
            return next(new CustomError("User not exist", 400));
        }

        let salt = await bcrypt.genSalt(8);
        let hash = await bcrypt.hash(newPassword, salt);
        console.log(hash);
        newPassword = hash;
       
        const { id } = result.rows[0];
        console.log(id);
        const user = await userDataMapper.updatePassword(id, newPassword);
        console.log(user);

  
        response.status(200).json({
            success: true,
            data: user
        });
    },

}