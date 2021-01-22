const client = require('./client');

productDataMapper = {

    // get the list of all products
    async getAllProduct() {
        const result = await client.query('SELECT * FROM "product"');
        return result.rows;
    },

    // get one product
    async getOneProduct(productId) {
        const result = await client.query('SELECT * FROM "product" WHERE id = $1', [productId]);
        // if the product don't exist get nothing and return null
        if (result.rowCount == 0 ){
            return null ;
        }

        return result.rows[0];
    },

    // get all product by categories
    async getProductsByCategory (categoryId) {
        // if category doesn't exist, return null
        const existCategory = await client.query('SELECT * FROM "category" WHERE category.id = $1', [categoryId]);
        console.log(existCategory);
        if (existCategory.rowCount === 0 ){
            console.log("null");
            return null ;
        }
        const result = await client.query(`SELECT category.name as category, product.*
                                            FROM product 
                                            JOIN possess  ON  possess.product_id = product.id 
                                            JOIN category  ON category.id = possess.category_id
                                            WHERE category.id = $1`, [categoryId]);

        // console.log(categoryId);
        // console.log(result.rows);
        return result.rows;
    },

    // create a new product
    async addOneProduct(productName) {
        const {name, price, description, image, quantity, shop_id} = productName;
        // we test if the product alreayd exist 
        const existProduct = await client.query(`SELECT name FROM "product" WHERE name = $1`, [productName]);
        // if it exist , return null
        if (existProduct.rowCount != 0){
            return null;
        }
        const shopId = await client.query(`SELECT id FROM "shop" WHERE name = $1`,[productName.shop]);
        console.log(shopId.rows[0].id);
        const categoryId = await client.query(`SELECT id FROM "category" WHERE name = $1`, [productName.category]);
        console.log(productName.category, 'productName.category');
        // if not return the result
        const result = await client.query(`INSERT INTO "product"(name, price, description, image, quantity, shop_id) VALUES ($1,$2,$3, $4, $5, $6) RETURNING *`,
        [name, price, description, image, quantity, shopId.rows[0].id]);
        return result.rows[0];

    },

    //update a product
    async updateOneProduct(productId, productInfo) {
        const {name, color} = productInfo ;

        const result = await client.query(`UPDATE "product" SET name = $1, price = $2, description = $3, image = $4, quantity = $5, shop_id = $6 WHERE id = $7 RETURNING *`,
        [name, price, description, image, quantity, shop_id, productId]);
        
        // if there is no product return null
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    // delete a product
    async deleteOneProduct(productId) {
        const result = await client.query(`DELETE FROM "product" WHERE id = $1 RETURNING *`, [productId]);
        // if there is no product return null
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];

    }
};

module.exports = productDataMapper;