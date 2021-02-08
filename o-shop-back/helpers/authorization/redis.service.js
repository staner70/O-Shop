const redis = require('redis');
const bluebird = require('bluebird');


bluebird.promisifyAll(redis);
const redisClient = redis.createClient(process.env.REDIS_URL);

module.exports = {

    addTokenToBlackList: async (token) => {
        console.log(typeof token, "<<addTokenToBlackList");
        await redisClient.LPUSHAsync("token", token);
    },

    isTokenInBlackList: async (token) => {
        let tokens = await redisClient.LRANGEAsync("token", 0, 999999999);
        console.log(typeof token,"<<isTokenInBlack token");
        console.log(tokens.indexOf(token) > -1, "<< VALUOF TOKEN");
        return tokens.indexOf(token) > -1;
    },
};

redisClient.on("connect", () => {
    console.log("Redis server is up & running ");
});

redisClient.on("error", err => {
    console.log("Woops , redis server is DOWN ", err);
});