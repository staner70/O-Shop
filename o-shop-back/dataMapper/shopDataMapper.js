const client = require('./client');

shopDataMapper = {

    // get the list of all shop
    async getAllShop() {
        const result = await client.query('SELECT * FROM "shop"');
        return result.rows;
    },

    // get one shop
    async getOneShop(shopId) {
        const result = await client.query('SELECT * FROM "shop" WHERE id = $1', [shopId]);

        // if the shop don't exist return null
        if (result.rowCount == 0) {
            return null;
        }
        // if not then return the result
        return result.rows;
    },

    // get list of shop by user( Owner or Manager)
    async getShopsByUser (userId) {
        const result = await client.query(`SELECT shop.*, user.name 
                                            FROM user
                                            JOIN work ON work.user_id = user.id
                                            JOIN shop ON shop_id = shop.id
                                            WHERE user.id = $1`, [userId])

         // if the user don't exist return null
         if (result.rowCount == 0) {
            return null;
        }
        // if not then return the result
        return result.rows;
    },

    // create a new shop
    async addOneShop(shopInfo) {

        // we test if the shop already exist 
        const existShop = await client.query('SELECT  adress, tel FROM "shop" WHERE adress = $1 AND tel = $2', [shopInfo.adress, shopInfo.tel]);
        // if it exist , return null
        if (existShop.rowCount != 0) {
            return null;
        }
        // if not return the result
        const result = await client.query('INSERT INTO "shop"(name, adress, tel) VALUES ($1, $2, $3) RETURNING *',
        [shopInfo.name, shopInfo.adress, shopInfo.tel]);
        return result.rows[0];
    },

    // uptdate a shop
    async updateOneShop(id, shopInfo) {
        const {name, adress, tel} =  shopInfo;

        const result = await client.query('UPDATE "shop" SET name = $1, adress = $2, tel = $3 WHERE id = $4 RETURNING *',
        [name, adress, tel, id]);

        // if there is no shop return null
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    // delete a shop
    async deleteOneShop(shopId) {
        const result = await client.query('DELETE FROM "shop" WHERE id = $1 RETURNING *', [shopId]);

        // if there is no shop return null
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    // async getAllShopByUser(shopId,userId) {

    //     const result = await client.query(``)
    // }
};

module.exports = shopDataMapper;