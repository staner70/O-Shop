const client = require('./client');

userDataMapper = {

    // get the list of all users
    async getAllUser() {
        const result = await client.query('SELECT * FROM "user"');
        return result.rows;
    },

    // get one user
    async getOneUser(id) {
        const result = await client.query('SELECT * FROM "user" WHERE id = $1', [id]);
        // if the user don't exist get nothing and return null
        if (result.rowCount == 0 ){
            return null ;
        }

        return result.rows[0];
    },

    // create a new user
    async addOneUser(userInfo) {
        const {username, first_name, last_name, password, role} = userInfo;
        // we test if the user alreayd exist 
        const existUser = await client.query(`SELECT username, password FROM "user" WHERE username = $1 AND password = $2`, [username, password ]);
        // if it exist , return null
        if (existUser.rowCount != 0){
            return null;
        }
        // add role name for the user based on the role_id
            //first we get the id
            console.log(role, 'role');
        const roleId = await client.query(`SELECT id FROM role WHERE name = $1`, [role]);
        
        // if not return the result
        const result = await client.query(`INSERT INTO "user"(username,first_name,last_name,password,role_id) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
        [username, first_name, last_name, password, roleId.rows[0].id]);
        return result.rows[0];

    },

    //update a user
    async updateOneUser(id, userInfo) {
        const {first_name, last_name, username, password , role} = userInfo ;

        const roleId = await client.query(`SELECT id FROM role WHERE name = $1`, [role]);

        const result = await client.query(`UPDATE "user" SET first_name = $1, last_name = $2, username = $3 ,  password = $4, role_id = $5 WHERE id = $6 RETURNING *`,
        [first_name, last_name, username, password ,roleId.rows[0].id, id]);
        
        // if there is no user return null
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    // delete a user
    async deleteOneUser(userId) {
        const result = await client.query(`DELETE FROM "user" WHERE id = $1 RETURNING *`, [userId]);
        // if there is no user return null
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];

    }
};

module.exports = userDataMapper;