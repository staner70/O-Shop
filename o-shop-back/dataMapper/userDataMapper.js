const client = require('./client');

userDataMapper = {

    // get the list of all users
    async getAllUser() {
        const result = await client.query(`SELECT * from userView`);

        return result.rows;
    },

    // get one user
    async getOneUser(id) {
        const result = await client.query('SELECT * FROM userView WHERE id = $1', [id]);
        return result.rows[0];
    },

    // create a new user
    async addOneUser(userInfo) {
        const {username, first_name, last_name, password, role, shop} = userInfo;
        // we test if the user alreayd exist 
        const existUser = await client.query(`SELECT username, password FROM "user" WHERE username = $1 AND password = $2`, [username, password ]);
        
        // if it exist , return null
        if (existUser.rowCount != 0){
            return null;
        }
        // add role name for the user based on the role_anme
            // first we get the id of role
        const roleId = await client.query(`SELECT id FROM role WHERE name = $1`, [role]);
            // we search the id of user
        const shopId = await client.query(`SELECT id FROM shop WHERE name = $1`, [shop]);
        

        const result = await client.query(`INSERT INTO "user"(username,first_name,last_name,password,role_id) VALUES ($1,$2,$3,$4,$5) 
                                            RETURNING id,first_name,last_name,username,role_id,created_at,updated_at`,
        [username, first_name, last_name, password, roleId.rows[0].id]);

        // we associate the user on a shop
        const associate = await client.query(`INSERT INTO "work"(shop_id, user_id) VALUES ($1, $2) RETURNING *`, [shopId.rows[0].id, result.rows[0].id]);
        return result.rows[0];

    },

    //update a user
    async updateOneUser(id, userInfo) {
        const {first_name, last_name, username, role, shop} = userInfo ;

        const roleId = await client.query(`SELECT id FROM role WHERE name = $1`, [role]);
        const shopId = await client.query(`SELECT id FROM shop WHERE name = $1`, [shop]);
        
        const result = await client.query(`UPDATE "user" SET first_name = $1, last_name = $2, username = $3 , role_id = $4 WHERE id = $5
                                            RETURNING id,first_name,last_name,username,role_id,created_at,updated_at`,
        [first_name, last_name, username ,roleId.rows[0].id, id]);

        //verification associate work
        const existAssociateWork = await client.query(`SELECT * FROM "work" WHERE shop_id = $1 AND user_id = $2`, [shopId.rows[0].id,id]);
        if (existAssociateWork.rowCount == 0) {
            const associate = await client.query(`INSERT INTO "work"(user_id , shop_id) VALUES ($1, $2) RETURNING *`, [id, shopId.rows[0].id]);
        } 

        console.log(existAssociateWork.rows);
        // else {
        //     const associate = await client.query(`UPDATE work SET user_id = $1, shop_id = $2 WHERE user_id = $3 RETURNING *`, [id, shopId.rows[0].id, id]);
        // }
        
            
        // if there is no user return null
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    // delete a user
    async deleteOneUser(userId) {
        const result = await client.query(`DELETE FROM "user" WHERE id = $1 
                                            RETURNING id,first_name,last_name,username,role_id,created_at,updated_at`, [userId]);
        // if there is no user return null
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];

    },

    //associate a user with shop
    async associateWork(userId, shopId) {
        const existAssociateWork = await client.query(`SELECT * FROM work WHERE user_id = $1 AND shop_id = $2 `, [userId, shopId]);

        // if it exist , return null
        if (existAssociateWork.rowCount != 0){
            return null;
        }

        const result = await client.query(`UPDATE work SET user_id = $1, shop_id = $2 WHERE user_id = $3 RETURNING *`, [userId,shopId,userId]);


        return result.rows[0];
    },

    //dissociate a user with shop
    async dissociateWork(userId, shopId) {
        const result = await client.query(`DELETE FROM work WHERE user_id = $1 AND shop_id = $2 RETURNING *`, [userId,shopId]);

        // if it exist , return null
        if (result.rowCount == 0){
            return null;
        }

        return result.rows[0];
    }
};

module.exports = userDataMapper;