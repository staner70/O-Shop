const CustomError = require('../../helpers/CustomError');
const client = require('../../dataMapper/client');


module.exports = {

    checkUserExist: async(request,response,next) => {
        const {id} = request.params;

        const user = await client.query(`SELECT * FROM "user" WHERE id = $1`,[id]);
        console.log(user, id);
        if (!user.rowCount == 0) {
            return next(new CustomError("There is no such user with that id", 400));

        }
        next();
    }
}