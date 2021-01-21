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
        const result = await client.query(`SELECT product.*, category.name 
                                            FROM product 
                                            JOIN possess  ON  possess.product_id= product.id 
                                            JOIN category  ON category.id = possess.category_id
                                            WHERE category.id = $1`, [categoryId]);
        // if category doesn't exist, return null
        const existCategory = await client.query('SELECT * FROM "product" WHERE product.id = $1', [categoryId])
        if (existCategory.rowCount == 0 ){
            return null ;
        }

        return result.rows[0];
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
        // if not return the result
        const result = await client.query(`INSERT INTO "product"(name, price, description, image, quantity, shop_id) VALUES ($1,$2,$3, $4, $5, $6) RETURNING *`,
        [name, price, description, image, quantity, shop_id]);
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