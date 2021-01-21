const client = require('./client');

userDataMapper = {

    // get the list of users
    async getAllUser() {
        const result = await client.query('SELECT * FROM "user"');
        return result.rows;
    },

    // get one user info
    async getOneUser(id) {
        const result = await client.query('SELECT * FROM "user" WHERE id = $1', [id]);
        // if the result get nothing return null
        if (result.rowCount == 0 ){
            return null ;
        }

        return result.rows[0];
    },

    // create a new user
    async addOneUser(userInfo) {
        
        const {username, password } = userInfo;
        // we test if the user alreayd exist 
        const existUser = await client.query(`SELECT user.username, user.password FROM "user" WHERE username = $1 AND password = $2`, [userInfo]);
        // if it exist , return null
        if (existUser.rowCount != 0){
            return null
        }
        // if not return the result
        const result = await client.query("INSERT INTO user() VALUES RETURNING *", []);
        return result.rows[0];

    },

    async updateOneUser(userInfo) {
        const {first_name, last_name, username, password , role_id, id} = userInfo ;

        const result = await client.query(`UPDATE INTO "user" SET first_name = $1, last_name = $2, username = $4 ,  password = $5, role_id = $6 WHERE id = $7`,[userInfo]);
        return result.rows[0];
    },

    async DeleteOneUser(userInfo) {
        const {        } = userInfo ;
        const result = await client.query(`DELETE * FROM "user" WHERE id = $1`, [userInfo]);
        return result.rows[0];

    }
};

module.exports = userDataMapper;