require('dotenv').config();

module.exports = {
    getAccessToRoute: async (request, response, next) => {
        const {JWT_SECRET_KEY} = process.env;

        if
    },
}