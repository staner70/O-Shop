const client = require('./client');

userDataMapper = {

    // get the list of users
    async getAllUser() {
        const result = await client.query('SELECT * FROM "user"');
        return result.rows;
    },

    // get one user info
    async getOneUser() {
        const result = await client.query('SELECT * FROM "user" WHERE id = $1', [id]);

        if (result.rowCount == 0 ){
            return null ;
        }

        return result.rows[0];
    },

    // create a new user
    async addOneUser() {
        const result = await client.query("INSERT INTO user() VALUES RETURNING *", []);
        return result.rows[0];

    },

    async updateOneUser() {
        const result = await client.query(`UPDATE INTO "user" SET username = ,  role_id = WHERE id = $1`,[id]);
        return result.rows[0];


    },

    async DeleteOneUser() {
        const result = await client.query(``);
        return result.rows[0];

    }
};

module.exports = userDataMapper;