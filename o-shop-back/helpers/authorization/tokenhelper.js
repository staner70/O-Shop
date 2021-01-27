const jwt = require('jsonwebtoken');

const tokenhelper = {
    generateJwtFromUser: (user) => {
        const {JWT_SECRET_KEY,JWT_EXPIRE} = process.env;

        const payload = {
            id: user.id,
            username: user.username
        };
    
        const token = jwt.sign(payload,JWT_SECRET_KEY, {
            expiresIn : JWT_EXPIRE
        });
        // console.log(token);
        return token;
    },

    sendJwtToClient: (user, response) => {
        // Generate JWT
        
        const token = tokenhelper.generateJwtFromUser(user);
        console.log(token);
        const { JWT_COOKIE, NODE_ENV} = process.env;
        //verification isAdmin
        let isAdmin;
        if (user.role_name == "admin") {
            isAdmin = true;
        } else {
            isAdmin = false;
        }
        console.log(typeof isAdmin);
        return response
        .status(200)
        .cookie("access_token",token,{
            httpOnly: true,
            expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000 * 60),
            secure: NODE_ENV === "development" ? false : true
        })
        .json({
            success: true,
            access_token : token,
            data : {
                name: user.username,
                role: user.role_name,
                isAdmin: isAdmin               
                
            }
        });
        // Response
    
    },

    isTokenIncluded: (request) => {
        console.log(request.headers.authorization, "<-- istokenincluded");
        return (
            request.headers.authorization && request.headers.authorization.startsWith("Bearer:")
        );
    },

    getAccessTokenFrom: (request) => {
        const authorization = request.headers.authorization;
        const access_token = authorization.split(" ")[1];
        console.log(access_token, "<---getAccesTokenFrom");
        return access_token;
    }
}

module.exports = tokenhelper;