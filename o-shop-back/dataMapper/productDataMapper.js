const client = require('./client');

productDataMapper = {

    // get the list of all products
    async getAllProduct() {
        const result = await client.query(`SELECT * FROM "product" `);

        // const result = await client.query(`SELECT s.*, c.* ,pr.*
        //                                 FROM "product" AS pr
        //                                 JOIN "shop" AS s
        //                                     ON s.id = pr.shop_id
        //                                 JOIN "possess" AS pos
        //                                     ON pr.id = pos.product_id
        //                                 JOIN "category" AS c
        //                                     ON c.id = pos.category_id
        //                                 JOIN "work" AS w
        //                                     ON w.shop_id = s.id
        // `);                                            
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
    async addOneProduct(productInfo) {
        const {name, price, description, image, quantity, shop_id} = productInfo;
        // we test if the product alreayd exist 
        const existProduct = await client.query(`SELECT name FROM "product" WHERE name = $1`, [name]);
        // if it exist , return null
        if (existProduct.rowCount != 0){
            return null;
        }
        // we search the shop id based  on one shop name
        const shopId = await client.query(`SELECT id FROM "shop" WHERE name = $1`,[productInfo.shop]);
        console.log(shopId.rows[0].id); // 1
        // we search for the category id based on the categorie name
        const categoryId = await client.query(`SELECT id FROM "category" WHERE name = $1`, [productInfo.category]);
        console.log(productInfo.category, 'productInfo.category',categoryId); //thé
        
        const result = await client.query(`INSERT INTO "product"(name, price, description, image, quantity, shop_id) VALUES ($1,$2,$3, $4, $5, $6) RETURNING *`,
        [name, price, description, image, quantity, shopId.rows[0].id]);
        
        // we associate the product on a (can be multiple) category
        const associate = await client.query(`INSERT INTO "possess"(category_id, product_id) VALUES ($1, $2) RETURNING *`, [categoryId.rows[0].id, result.rows[0].id]);
        console.log(associate.rows[0]); 
        return result.rows[0];

    },

    //update a product
    async updateOneProduct(productId, productInfo) {
        const {name, price, description, image, quantity, shop_id} = productInfo ;

        // we search for the category id based on the categorie name
        const categoryId = await client.query(`SELECT id FROM "category" WHERE name = $1`, [productInfo.category]);
        console.log(productInfo.category, 'productInfo.category',categoryId); //thé

        const result = await client.query(`UPDATE "product" SET name = $1, price = $2, description = $3, image = $4, quantity = $5 WHERE id = $6 RETURNING *`,
        [name, price, description, image, quantity, productId]);

        // we associate the product on a (can be multiple) category
        const associate = await client.query(`UPDATE "possess" SET category_id = $1, product_id =  $2 WHERE product_id = $3 RETURNING *`, [categoryId.rows[0].id, result.rows[0].id, productId]);
        console.log(associate.rows[0]); // undefined
        
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