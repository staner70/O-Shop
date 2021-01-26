-- Revert eshop:020-contraint from pg

BEGIN;

ALTER TABLE "possess"
   DROP CONSTRAINT possess_category_id_fkey
 , ADD  CONSTRAINT possess_category_id_fkey
   FOREIGN KEY (category_id) REFERENCES category(id);
ALTER TABLE "possess"
   DROP CONSTRAINT possess_product_id_fkey
 , ADD  CONSTRAINT possess_product_id_fkey
   FOREIGN KEY (product_id) REFERENCES product(id);

ALTER TABLE "work"
   DROP CONSTRAINT work_shop_id_fkey
 , ADD  CONSTRAINT work_shop_id_fkey
   FOREIGN KEY (shop_id) REFERENCES shop(id);
ALTER TABLE "work"
   DROP CONSTRAINT work_user_id_fkey
 , ADD  CONSTRAINT work_user_id_fkey
   FOREIGN KEY (user_id) REFERENCES "user"(id);

ALTER TABLE "role"
    DROP CONSTRAINT role_name_unique;

ALTER TABLE "category"
    DROP CONSTRAINT category_name_unique,
    DROP CONSTRAINT not_espace_vide,
    DROP CONSTRAINT TEXT_COLOR;

ALTER TABLE "shop"
    DROP CONSTRAINT shop_adress_unique;

ALTER TABLE "product"
    ALTER price TYPE INT,
    DROP CONSTRAINT product_name_unique,
    DROP CONSTRAINT product_shop_id_fkey,
    ADD CONSTRAINT product_shop_id_fkey 
    FOREIGN KEY (shop_id) REFERENCES shop(id);

ALTER TABLE "user"
    DROP CONSTRAINT user_username_unique;

COMMIT;
