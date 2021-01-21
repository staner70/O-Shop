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
        
    
      
    
        await client.end();
    } catch (error) {
        console.log(error);
    }
    

})();