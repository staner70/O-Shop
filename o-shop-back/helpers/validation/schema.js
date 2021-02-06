const Joi = require('joi');
const client = require('../../dataMapper/client');


    // PRODUCT
    const productSchema = Joi.object({
        bar_code:   Joi.number(),
        name:       Joi.string().min(2).max(30).required(),
        price:      Joi.number().required(),
        description:Joi.string().max(400).required(),
        image:      Joi.string(), 
        quantity:   Joi.number().required(),
        category:   Joi.string().required()
                        .external(async (value) => {
                            //vérifier que value correspond à un id existant
                            const category = await client.query(`SELECT * FROM "category" WHERE name = $1`,[value]);
                            console.log(value, "<-- value");
                            if (category.rowCount == 0) {
                                throw new Error ('category.invalid');
                            }

                            return value;
                        
                        }),
        shop:       Joi.string().required()
                        .external(async (value) => {
                            //vérifier que value correspond à un id existant
                            const shop = await client.query(`SELECT * FROM "shop" WHERE name = $1`, [value]);
                            console.log(value, "<---shop");
                            if (shop.rowCount == 0) {
                                throw new Error ('shop.invalid');
                            }

                            return value;
                        
                        }),
    })
    
    // USER
    
    const userSchema =  Joi.object({
        first_name: Joi.string().min(2).max(30).required(),
        last_name:  Joi.string().min(1).max(30).required(),
        username:   Joi.string().min(3).max(30).required(),
        password:   Joi.string().min(3).max(30).required(),
        role:       Joi.string().min(3).max(10).required()
                        .external(async (value) => {
                            //vérifier que value correspond à un id existant
                            const role = await client.query(`SELECT * FROM "role" WHERE name = $1`, [value]);

                            if (role.rowCount == 0) {
                                throw new Error ('role.invalid');
        
                            }

                            return value;
                        
                        }),
        shop:       Joi.string()
                    .required()
                    .external(async (value) => {
                        //vérifier que value correspond à un id existant
                        const shop = await client.query(`SELECT * FROM "shop" WHERE name = $1`, [value]);
                        console.log(value, "<---shop");
                        if (shop.rowCount == 0) {
                            throw new Error ('shop.invalid');
                        }

                        return value;
                    
                    }),
    });

    // update user
    const updateUserSchema =  Joi.object({
        first_name: Joi.string().min(2).max(30).required(),
        last_name:  Joi.string().min(1).max(30).required(),
        username:   Joi.string().min(3).max(30).required(),
        role:       Joi.string().min(3).max(10).required()
                        .external(async (value) => {
                            //vérifier que value correspond à un id existant
                            const role = await client.query(`SELECT * FROM "role" WHERE name = $1`, [value]);

                            if (role.rowCount == 0) {
                                throw new Error ('role.invalid');
        
                            }

                            return value;
                        
                        }),
        shop:       Joi.string()
                    .required()
                    .external(async (value) => {
                        //vérifier que value correspond à un id existant
                        const shop = await client.query(`SELECT * FROM "shop" WHERE name = $1`, [value]);
                        console.log(value, "<---shop");
                        if (shop.rowCount == 0) {
                            throw new Error ('shop.invalid');
                        }

                        return value;
                    
                    }),
    });

    // SHOP
    const shopSchema = Joi.object({
        name:       Joi.string().min(3).max(30).required(),
        adress:     Joi.string().min(3).max(100).required(),
        tel:        Joi.string().allow('').max(30),
    })

    // CATEGORY
    const categorySchema = Joi.object({
        name:       Joi.string().min(3).max(30).required(),
        color:      Joi.string().required()
    })
    // ROLE
    const roleSchema = Joi.object({
        name:       Joi.string().min(3).max(30).required(),
    })

    //updatePassword
    const updatePasswordSchema = Joi.object({
        username:   Joi.string().min(3).max(30).required(),
        oldPassword:   Joi.string().min(3).max(30).required(),
        newPassword:   Joi.string().min(3).max(30).required(),
        confirmPassword:   Joi.string().min(3).max(30).required(),
    })

module.exports = { productSchema, userSchema, updateUserSchema, shopSchema, categorySchema, roleSchema, updatePasswordSchema  };