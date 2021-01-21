// Script d'import autonome vers notre base de données
// Pour le lancer il faut utiliser "npm run import"
require('dotenv').config();
const {Client} = require('pg');

// Instant Invoke Function Execution(IIFE)
// Cela nous permettra d'utiliser await directement dans notre fichier

(async () => {

    try {
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
            
        });
        await client.connect();
    
        // Pour pouvoir refaire tourner mon script sans risque de doublon ou
        // d'erreur sur des "UNIQUE" il vaut "vider" mes table avec de le faire tourner
        // TRUNCATE TABLE vide les tables données
        // et RESTART IDENTITY réinitialise les id à 1
        await client.query('TRUNCATE TABLE "role", "user" RESTART IDENTITY CASCADE');
    
        //Je vais stocker dans cet objet les id de mes catégories
        // const categoryIdMap = {};
    
       
            const resultRole = await client.query(`INSERT INTO "role"(name) VALUES ('admin'),('employee') `);
            console.log(resultRole.rows[0]);
    
            const resultUser = await client.query(`INSERT INTO "user"(first_name, last_name, username, password, role_id) 
            VALUES ('michel', 'michel', 'm_michel', '123456', 1 ),('max','max','m_max','123456',2) `);
            console.log(resultUser.rows[0]);
        
            const resultProduct = await client.query(`INSERT INTO "product"(name, price, description, image, quantity, shop_id)
            VALUES ('coca-cola', 2, 'boisson qui pop en bouche', 'bruh', 40, 1),
                ('pepsy', 2,'sa décoife', 'triste', 20, 2`);
            console.log(resultProduct[0]);
        
            const resultCategory = await client.query(`INSERT INTO "category"(name, color)
            VALUES ('boisson', '#00FF00'),
                   ('café', '#FOF') `);
            console.log(resultCategory);
            
            const resultShop = await client.query(`INSERT INTO "shop"(name,adress,tel)
            VALUES ('OSHOP', '12 AVENUE BIDON 75100 PARIS'),
                    ('OSHEEP', '14 AVENUE TROGNON 76556 VORTEX', '0155667788')`);

            const resultPossess = await client.query(`INSERT INTO "possess"(product_id, category_id)
            VALUES (1, 1), (1,2)`);


            const resultWork = await client.query(`INSERT INTO "work"(shop_id,user_id)
            VALUES (1,1),(1,2)`);

        await client.end();
    } catch (error) {
        console.log(error);
    }
    

})();