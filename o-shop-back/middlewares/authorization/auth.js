require('dotenv').config();
const { isTokenIncluded, getAccessTokenFrom } = require('../../helpers/authorization/tokenhelper');
const CustomError = require('../../helpers/CustomError');
const jwt = require('jsonwebtoken');
const client = require('../../dataMapper/client');
const { isTokenInBlackList } = require('../../helpers/authorization/redis.service');

module.exports = {
    getAccessToRoute: async (request, response, next) => {
        // const {JWT_SECRET_KEY} = process.env;
        
        if(!isTokenIncluded(request)) {
            console.log("<-- isTokenIncluded");
            return next(new CustomError("You are not authorized to access this route", 401));
        }
        const accessToken = getAccessTokenFrom(request);
        console.log(accessToken, "<-- getAccessToRoute");
        console.log(await isTokenInBlackList(accessToken), "<<< getAccess isTokenINBlack");
        if (await isTokenInBlackList(accessToken)) {
            return next(new CustomError("Invalid Token", 401));
        }


        jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                console.log(accessToken, "<--- verify");
                return next(new CustomError("You are not authorized to access this route, token", 401));
            }
            request.user = {
                id: decoded.id,
                username: decoded.username
            }
            console.log(decoded, "<-- decode" );
            next();
        });
        
    },
    // we want to autorise the admin route only if the user is a admin,  so we test if he got the right role
    getAdminAccess: async (request, response, next) => {
        const {id} = request.user;
        console.log(request.user);
        const userRole = await client.query(`SELECT r.name FROM "user" AS u JOIN role AS r ON u.role_id = r.id WHERE u.id = $1`, [id]);

        console.log(userRole.rows[0]);
        if (userRole.rows[0].name != "admin") {
            return next(new CustomError("Only admins can access this route", 403));
        }
        next();
    },

    async getLoginUser (request, response) {
        const result = await client.query(`SELECT * FROM user WHERE usename = $1 AND password = $2`, [username, password]);

        if (result.rowCount == 0) {
            return null;
        }

        return result.rows[0];
    }
}