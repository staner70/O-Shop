-- Deploy eshop:70-add-bar-code to pg

BEGIN;

ALTER TABLE product
ADD bar_code TYPE NUMBER;

COMMIT;
