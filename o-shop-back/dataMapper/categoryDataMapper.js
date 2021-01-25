const client = require('./client');

categoryDataMapper = {

    // get the list of all categories
    async getAllCategories() {
        const result = await client.query('SELECT * FROM "category"');
        return result.rows;
    },

    // get one category
    async getOneCategory(categoryId) {
        const result = await client.query('SELECT * FROM "category" WHERE id = $1', [categoryId]);
        // if the category don't exist get nothing and return null
        if (result.rowCount == 0 ){
            return null ;
        }

        return result.rows[0];
    },

    // create a new category
    async addOneCategory(categoryInfo) {
        const {name, color} = categoryInfo;
        // we test if the category alreayd exist 
        const existCategory = await client.query(`SELECT name, color FROM "category" WHERE name = $1`, [categoryInfo]);
        // if it exist , return null
        if (existCategory.rowCount != 0){
            return null;
        }
        // if not return the result
        const result = await client.query(`INSERT INTO "category"(name,color) VALUES ($1,$2) RETURNING *`,
        [name,color]);
        return result.rows[0];

    },

    //update a category
    async updateOneCategory(categoryId, categoryInfo) {
        const {name, color} = categoryInfo ;

        const result = await client.query(`UPDATE "category" SET name = $1, color = $2 WHERE id = $3 RETURNING *`,
        [name, color, categoryId]);
        
        // if there is no category return null
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    // delete a category
    async deleteOneCategory(categoryId) {
        const result = await client.query(`DELETE FROM "category" WHERE id = $1 RETURNING *`, [categoryId]);
        // if there is no category return null
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];

    }
};

module.exports = categoryDataMapper;