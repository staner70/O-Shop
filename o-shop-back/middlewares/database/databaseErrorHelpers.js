const CustomError = require('../../helpers/CustomError');
const client = require('../../dataMapper/client');


module.exports = {

    checkUserExist: async(request,response,next) => {
        const { id } = request.params;

        const user = await client.query(`SELECT * FROM "user" WHERE id = $1`,[id]);
        console.log(user.rowCount, id);
        if (user.rowCount == 0) {
            return next(new CustomError(`User Not Found with Id : ${id} `, 404));

        }
        next();
    },
    
    checkProductExist: async(request, response, next) => {
        const {id} = request.params;

        const product = await client.query(`SELECT * FROM "product" WHERE id = $1`,[id]);
        console.log(product.rowCount, id);
        if (product.rowCount == 0) {
            return next(new CustomError("There is no such product with that id", 404));

        }
        next();
    },

    checkCategoryExist: async (request, response, next) => {
        const {id} = request.params;

        const category = await client.query(`SELECT * FROM "category" WHERE id = $1`,[id]);
        console.log(category.rowCount, id);
        if (category.rowCount == 0) {
            return next(new CustomError("There is no such category with that id", 404));

        }
        next();
    },

    checkCategoryName: async (request, response, next) => {
        const {category} = request.body;
        
        console.log(category, "checkCategoryName");
        const categoryName = await client.query(`SELECT * FROM "category" WHERE name = $1`,[category]);
        console.log(categoryName.rows[0], "<--- categoryCheck");
        if (categoryName.rowCount == 0) {
            return next(new CustomError("There is no such category with that name", 404));
        }

        next();

    },

    checkShopName: async (request, response, next) => {
        const { shop } = request.body;

        console.log(shop, "<--checkShopName");
        const shopName = await client.query(`SELECT * FROM "shop" WHERE name = $1`, [shop]);
        if (shopName.rowCount == 0) {
            return next(new CustomError("There is no such shop with that name", 404));
        }
        next();
    },
}