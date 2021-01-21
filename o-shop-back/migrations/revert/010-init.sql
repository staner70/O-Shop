-- Revert eshop:010-init from pg

BEGIN;

DROP TABLE "possess";
DROP TABLE "work";
DROP TABLE "user";
DROP TABLE "product";
DROP TABLE "shop";
DROP TABLE "category";
DROP TABLE "role";

COMMIT;
