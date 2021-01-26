-- Revert eshop:040-add_domain from pg

BEGIN;

ALTER TABLE "category"
    ALTER COLUMN "name" TYPE TEXT;
    

ALTER TABLE "product" 
    ALTER COLUMN "name" TYPE TEXT;

ALTER TABLE "shop" 
    ALTER COLUMN "name" TYPE TEXT;

ALTER TABLE "user" 
    ALTER COLUMN "username" TYPE TEXT,
    ALTER COLUMN "first_name" TYPE TEXT,
    ALTER COLUMN "last_name" TYPE TEXT,
    ALTER COLUMN "password" TYPE TEXT;

DROP DOMAIN NOT_ESPACE_VIDE;


COMMIT;
