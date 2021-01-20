const jwt = require('jsonwebtoken');

const tokenhelper = {
    generateJwtFromUser: (user) => {
        const {JWT_SECRET_KEY,JWT_EXPIRE} = process.env;

        const payload = {
            id: this._id,
            name: this.name
        };
    
        const token = jwt.sign(payload,JWT_SECRET_KEY, {
            expiresIn : JWT_EXPIRE
        });
        // console.log(token);
        return token;
    },

    sendJwtToClient: (user, response) => {
        // Generate JWT
        console.log(user);
        const token = tokenhelper.generateJwtFromUser(user);
        console.log(token);
        const { JWT_COOKIE, NODE_ENV} = process.env;
        
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
                name: user.username
                
            }
        });
        // Response
    
    },
}

module.exports = tokenhelper;