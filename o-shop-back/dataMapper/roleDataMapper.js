const client = require('./client');

roleDataMapper = {
    async getAllRole() {
        const result = await client.query(`SELECT * FROM role`);

        return result.rows;
    },

    async addOneRole(name) {
        const result = await client.query(`INSERT INTO "role"(name) VALUES ($1) RETURNING *`, [name]);

        return result.rows[0];
    },

    async updateOneRole(id, name) {
        console.log(id);
        // we test if the product alreayd exist 
        const existRole = await client.query(`SELECT * FROM "role" WHERE id = $1`, [id]);
        
        // if it exist , return null
        if (existRole.rowCount == 0){
            return null;
        }
        const result = await client.query(`UPDATE "role" SET name = $1 WHERE id = $2 RETURNING *`, [name, id]);
        

        return result.rows[0];
    },

    async deleteOneRole(id) {

        const result = await client.query(`DELETE FROM "role" WHERE id = $1 RETURNING *`, [id]);
        // if there is no role return null
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    }
}

module.exports = roleDataMapper;