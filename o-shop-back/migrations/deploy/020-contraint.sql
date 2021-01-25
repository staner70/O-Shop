-- Deploy eshop:020-contraint to pg

BEGIN;

ALTER TABLE "role"
    ADD CONSTRAINT role_name_unique UNIQUE(name);

ALTER TABLE "category"
    ADD CONSTRAINT category_name_unique UNIQUE(name),
    ADD CONSTRAINT TEXT_COLOR CHECK(color ~ '^#([\da-fA-F]{3}|[\da-fA-F]{6})$');

ALTER TABLE "shop"
    ADD CONSTRAINT  shop_adress_unique  UNIQUE(adress);

ALTER TABLE "product"
    DROP CONSTRAINT product_shop_id_fkey,
    ADD CONSTRAINT product_shop_id_fkey 
    FOREIGN KEY (shop_id) REFERENCES shop(id) ON DELETE CASCADE,
    ADD CONSTRAINT product_name_unique  UNIQUE(name),
    ALTER price TYPE NUMERIC(18,2);
    

ALTER TABLE "user"
    ADD CONSTRAINT user_username_unique UNIQUE(username);

ALTER TABLE "work"
   DROP CONSTRAINT work_shop_id_fkey
 , ADD  CONSTRAINT work_shop_id_fkey
   FOREIGN KEY (shop_id) REFERENCES shop(id) ON DELETE CASCADE;
ALTER TABLE "work"
   DROP CONSTRAINT work_user_id_fkey
 , ADD  CONSTRAINT work_user_id_fkey
   FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE;

ALTER TABLE "possess"
   DROP CONSTRAINT possess_category_id_fkey
 , ADD  CONSTRAINT possess_category_id_fkey
   FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE;
ALTER TABLE "possess"
   DROP CONSTRAINT possess_product_id_fkey
 , ADD  CONSTRAINT possess_product_id_fkey
   FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE;

COMMIT;


